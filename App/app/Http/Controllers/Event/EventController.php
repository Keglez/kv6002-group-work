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
        $organiser = 'Keglez Co';

        $event = Event::where('event_orgi', '=', $organiser)->get();        
        

        return Inertia::render('Events/EventDashboard', [
            'events' => $event,
            'organiser' => $organiser,
        ]);
    }

    /**
     * Create Event
     */
    public function createEvent()
    {
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Event::all()->take(3);
        

        return Inertia::render('Events/CreateEvent', [
            'events' => $event,
        ]);
    }

}
