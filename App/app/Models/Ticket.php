<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use MongoDB\Laravel\Eloquent\Model;


class Ticket extends Model
{    
    protected $connection = 'mongodb';
    protected $collection = 'tickets';

    protected $fillable = [
        'tickets_num',
        'tickets_title',
        'tickets_desc',
        'tickets_date'
    ];
}
