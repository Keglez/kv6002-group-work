<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;


class Chat extends Model
{    
    protected $connection = 'mongodb';
    protected $collection = 'chats';

    protected $fillable = [
        'user_ids',
        'message',
    ];
}
