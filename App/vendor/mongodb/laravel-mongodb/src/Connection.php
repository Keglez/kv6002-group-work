<?php

declare(strict_types=1);

namespace MongoDB\Laravel;

use Composer\InstalledVersions;
use Illuminate\Database\Connection as BaseConnection;
use InvalidArgumentException;
use MongoDB\Client;
use MongoDB\Database;
use MongoDB\Driver\Exception\AuthenticationException;
use MongoDB\Driver\Exception\ConnectionException;
use MongoDB\Driver\Exception\RuntimeException;
use MongoDB\Driver\ReadPreference;
use MongoDB\Laravel\Concerns\ManagesTransactions;
use Throwable;

use function class_exists;
use function filter_var;
use function implode;
use function is_array;
use function preg_match;
use function str_contains;

use const FILTER_FLAG_IPV6;
use const FILTER_VALIDATE_IP;

/** @mixin Database */
class Connection extends BaseConnection
{
    use ManagesTransactions;

    private static ?string $version = null;

    /**
     * The MongoDB database handler.
     *
     * @var Database
     */
    protected $db;

    /**
     * The MongoDB connection handler.
     *
     * @var Client
     */
    protected $connection;

    /**
     * Create a new database connection instance.
     */
    public function __construct(array $config)
    {
        $this->config = $config;

        // Build the connection string
        $dsn = $this->getDsn($config);

        // You can pass options directly to the MongoDB constructor
        $options = $config['options'] ?? [];

        // Create the connection
        $this->connection = $this->createConnection($dsn, $config, $options);

        // Select database
        $this->db = $this->connection->selectDatabase($this->getDefaultDatabaseName($dsn, $config));

        $this->useDefaultPostProcessor();

        $this->useDefaultSchemaGrammar();

        $this->useDefaultQueryGrammar();
    }

    /**
     * Begin a fluent query against a database collection.
     *
     * @param  string $collection
     *
     * @return Query\Builder
     */
    public function collection($collection)
    {
        $query = new Query\Builder($this, $this->getQueryGrammar(), $this->getPostProcessor());

        return $query->from($collection);
    }

    /**
     * Begin a fluent query against a database collection.
     *
     * @param  string      $table
     * @param  string|null $as
     *
     * @return Query\Builder
     */
    public function table($table, $as = null)
    {
        return $this->collection($table);
    }

    /**
     * Get a MongoDB collection.
     *
     * @param  string $name
     *
     * @return Collection
     */
    public function getCollection($name)
    {
        return new Collection($this, $this->db->selectCollection($name));
    }

    /** @inheritdoc */
    public function getSchemaBuilder()
    {
        return new Schema\Builder($this);
    }

    /**
     * Get the MongoDB database object.
     *
     * @return Database
     */
    public function getMongoDB()
    {
        return $this->db;
    }

    /**
     * return MongoDB object.
     *
     * @return Client
     */
    public function getMongoClient()
    {
        return $this->connection;
    }

    /**
     * {@inheritDoc}
     */
    public function getDatabaseName()
    {
        return $this->getMongoDB()->getDatabaseName();
    }

    /**
     * Get the name of the default database based on db config or try to detect it from dsn.
     *
     * @throws InvalidArgumentException
     */
    protected function getDefaultDatabaseName(string $dsn, array $config): string
    {
        if (empty($config['database'])) {
            if (! preg_match('/^mongodb(?:[+]srv)?:\\/\\/.+\\/([^?&]+)/s', $dsn, $matches)) {
                throw new InvalidArgumentException('Database is not properly configured.');
            }

            $config['database'] = $matches[1];
        }

        return $config['database'];
    }

    /**
     * Create a new MongoDB connection.
     */
    protected function createConnection(string $dsn, array $config, array $options): Client
    {
        // By default driver options is an empty array.
        $driverOptions = [];

        if (isset($config['driver_options']) && is_array($config['driver_options'])) {
            $driverOptions = $config['driver_options'];
        }

        $driverOptions['driver'] = [
            'name' => 'laravel-mongodb',
            'version' => self::getVersion(),
        ];

        // Check if the credentials are not already set in the options
        if (! isset($options['username']) && ! empty($config['username'])) {
            $options['username'] = $config['username'];
        }

        if (! isset($options['password']) && ! empty($config['password'])) {
            $options['password'] = $config['password'];
        }

        return new Client($dsn, $options, $driverOptions);
    }

    /**
     * Check the connection to the MongoDB server
     *
     * @throws ConnectionException if connection to the server fails (for reasons other than authentication).
     * @throws AuthenticationException if authentication is needed and fails.
     * @throws RuntimeException if a server matching the read preference could not be found.
     */
    public function ping(): void
    {
        $this->getMongoClient()->getManager()->selectServer(new ReadPreference(ReadPreference::PRIMARY_PREFERRED));
    }

    /** @inheritdoc */
    public function disconnect()
    {
        unset($this->connection);
    }

    /**
     * Determine if the given configuration array has a dsn string.
     */
    protected function hasDsnString(array $config): bool
    {
        return ! empty($config['dsn']);
    }

    /**
     * Get the DSN string form configuration.
     */
    protected function getDsnString(array $config): string
    {
        return $config['dsn'];
    }

    /**
     * Get the DSN string for a host / port configuration.
     */
    protected function getHostDsn(array $config): string
    {
        // Treat host option as array of hosts
        $hosts = is_array($config['host']) ? $config['host'] : [$config['host']];

        foreach ($hosts as &$host) {
            // ipv6
            if (filter_var($host, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
                $host = '[' . $host . ']';
                if (! empty($config['port'])) {
                    $host .= ':' . $config['port'];
                }
            } else {
                // Check if we need to add a port to the host
                if (! str_contains($host, ':') && ! empty($config['port'])) {
                    $host .= ':' . $config['port'];
                }
            }
        }

        // Check if we want to authenticate against a specific database.
        $authDatabase = isset($config['options']) && ! empty($config['options']['database']) ? $config['options']['database'] : null;

        return 'mongodb://' . implode(',', $hosts) . ($authDatabase ? '/' . $authDatabase : '');
    }

    /**
     * Create a DSN string from a configuration.
     */
    protected function getDsn(array $config): string
    {
        return $this->hasDsnString($config)
            ? $this->getDsnString($config)
            : $this->getHostDsn($config);
    }

    /** @inheritdoc */
    public function getElapsedTime($start)
    {
        return parent::getElapsedTime($start);
    }

    /** @inheritdoc */
    public function getDriverName()
    {
        return 'mongodb';
    }

    /** @inheritdoc */
    protected function getDefaultPostProcessor()
    {
        return new Query\Processor();
    }

    /** @inheritdoc */
    protected function getDefaultQueryGrammar()
    {
        return new Query\Grammar();
    }

    /** @inheritdoc */
    protected function getDefaultSchemaGrammar()
    {
        return new Schema\Grammar();
    }

    /**
     * Set database.
     */
    public function setDatabase(Database $db)
    {
        $this->db = $db;
    }

    /**
     * Dynamically pass methods to the connection.
     *
     * @param  string $method
     * @param  array  $parameters
     *
     * @return mixed
     */
    public function __call($method, $parameters)
    {
        return $this->db->$method(...$parameters);
    }

    private static function getVersion(): string
    {
        return self::$version ?? self::lookupVersion();
    }

    private static function lookupVersion(): string
    {
        if (class_exists(InstalledVersions::class)) {
            try {
                return self::$version = InstalledVersions::getPrettyVersion('mongodb/laravel-mongodb');
            } catch (Throwable) {
                // Ignore exceptions and return unknown version
            }
        }

        return self::$version = 'unknown';
    }
}
