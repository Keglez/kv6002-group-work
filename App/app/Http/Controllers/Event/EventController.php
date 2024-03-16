<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    /**
     * 
     */
    public function get()
    {        
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Event::all()->take(3);
        

        return Inertia::render('Home', [
            'events' => $event,
        ]);
    }


    /**
     * Event Dashboard
     */
    public function eventDashboard()
    {        
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Event::all()->take(3);
        

        return Inertia::render('Events/EventDashboard', [
            'events' => $event,
        ]);
    }

}
