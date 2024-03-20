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
     * Store the data for the event.
     */
    public function storeEventData(Request $request)
    {
        // Dummy data.
        $organiser = 'Keglez Co';


        // Create an store new event.
        $event = new Event;
        
        $event->event_name = $request->event_name;
        $event->event_desc = $request->event_desc;
        $event->event_orgi = $request->event_orgi;
        $event->event_date = $request->event_date;
        $event->event_thumb = $request->event_thumb;
        $event->event_slug = $request->event_slug;

        $event->save();

        // Get events ready to display on dashboard.
        $event = Event::where('event_orgi', '=', $organiser)->get();

        return Inertia::render('Events/CreateEvent', [
            'events' => $event,
            'organiser' => $organiser,
        ]);
    }

}
