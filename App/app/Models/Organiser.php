<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;


class Organiser extends Model
{    
    protected $connection = 'mongodb';
    protected $collection = 'organisers';

    protected $fillable = [
        'orgi_name',
        'orgi_code',
    ];
}
