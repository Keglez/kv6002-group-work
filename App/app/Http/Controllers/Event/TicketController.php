<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Ticket;

class TicketController extends Controller
{
    /**
     * 
     */
    public function get()
    {        
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Ticket::all()->take(3);
        

        return Inertia::render('Events/TicketInfo', [
            'tickets' => $event,
        ]);
    }


    /**
     * Event Dashboard
     */
    public function eventDashboard()
    {
        $organiser = 'Keglez Co';

        $event = Ticket::where('tickets_num', '>', 0)->get();
        

        return Inertia::render('Events/TicketDashboard', [
            'events' => $event,
        ]);
    }

    
    /**
     * Create Event
     */
    public function createEventForm()
    {
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $organiser = "Keglez Co";        

        return Inertia::render('Events/CreateTicket', [
            'organiser' => $organiser,
        ]);
    }


    /**
     *  Display the event form and it's data using the event data.
     */
    public function editForm(Request $request)
    {        
        $event = Ticket::find($request->id);
        
        return Inertia::render('Events/EditTicket', [
            'event' => $event,
        ]);
    }    
    
}
