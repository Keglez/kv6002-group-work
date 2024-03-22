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
    public function createEventForm()
    {
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $organiser = "Keglez Co";        

        return Inertia::render('Events/CreateEvent', [
            'organiser' => $organiser,
        ]);
    }


    /**
     *  Display the event form and it's data using the event data.
     */
    public function editForm(Request $request)
    {        
        $event = Event::find($request->id);
        
        return Inertia::render('Events/EditEvent', [
            'event' => $event,
        ]);
    }    
    
}
