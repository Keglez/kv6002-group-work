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
    public function eventDashboard(Request $request)
    {
        $permission = 0;

        if ($permission == 0) // Generate User Page
        {
            $organiser = 'Keglez Co';        
            $event = Event::where('event_orgi', '=', $organiser)->get();

            return Inertia::render('Events/UserDashboard', [
                'events' => $event,
                'organiser' => $organiser,
            ]);            
        }
        else // Generate Organiser Page
        {
            /**
             *  Generating dummy data for the user's joined events.
             */ 
            $event_ids = array("65f2ece71603d010135d9d18", "65ff830dc07e9d98dc01d795", "65ff838cc07e9d98dc01d796");
            $event_list = array();

            foreach($event_ids as $id)
            {
                $event = Event::find($id);
                array_push($event_list, $event);
            }      

            return Inertia::render('Events/EventDashboard', [
                'events' => $event_list 
            ]);
        }
    }

    
    /**
     * Create Event
     */
    public function createEventForm()
    {
        $permission = 0;
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $organiser = "Keglez Co";

        if($permission == 1) // If the user is an organiser...
        {
            return Inertia::render('Events/CreateEvent', [
                'organiser' => $organiser,
            ]);
        }

        return redirect('/profile/events');
    }


    /**
     *  Display the event form and it's data using the event data.
     */
    public function editForm(Request $request)
    {
        $permission = 0; 

        if ($permission == 1) // If the user is an organiser...
        {
            $event = Event::find($request->id);
        
            return Inertia::render('Events/EditEvent', [
                'event' => $event,
            ]);
        }

        return redirect('/profile/events');
    }    
    
}
