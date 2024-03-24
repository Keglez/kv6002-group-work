<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;


class Event extends Model
{    
    protected $connection = 'mongodb';
    protected $collection = 'events';

    protected $fillable = [
        'event_orgi',
        'event_name',
        'event_desc',
        'event_date',
        'event_location',
        'event_attendees',
        'event_thumb',
        'event_slug'
    ];
}
