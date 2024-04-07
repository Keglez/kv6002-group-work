<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Event;
use App\Models\User;
use App\Models\Organiser;

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
        $userId = Auth::id();
        $user = User::where('_id', '=', $userId)->get()->first();
        $permission = $user->permission;

        if ($permission == 0) // Generate User Page
        {
            $results = array();
            $eventlist = $user->events;
            foreach ($eventlist as $event) {
                foreach($event as $a){ 
                    $varible = Event::where('_id', '=', $a)->get()->first();

                    array_push($results, $varible);
                }
            }
            //get IDs from list f
            //For each id from event list get event and store into events
            
            return Inertia::render('Events/UserDashboard', [
                'events' => $results, //Pass events to user dashboard
            ]);            
        }
        else // Generate Organiser Page
        {
            /**
             *  Generating dummy data for the user's joined events.
             */ 
            
            $organiser = Organiser::where('orgi_code', '=', $user->organiserID)->get()->first();
            
            $orgi_name = $organiser->orgi_name;
            $event = Event::where('event_orgi', '=', $orgi_name)->get();

            return Inertia::render('Events/EventDashboard', [
                'events' => $event,
                'organiser' => $orgi_name,
            ]);
        }
    }

    
    /**
     * Create Event
     */
    public function createEventForm()
    {
        // Get user permission.
        $userId = Auth::id();
        $user = User::where('_id', '=', $userId)->get()->first();
        $permission = $user->permission;                

        if($permission == 1) // If the user is an organiser...
        {
            // Get organiser information.
            $organiser = Organiser::where('orgi_code', '=', $user->organiserID)->get()->first();
            $orgi_name = $organiser->orgi_name;

            return Inertia::render('Events/CreateEvent', [
                'organiser' => $orgi_name,
            ]);
        }

        return redirect('/profile/events');
    }


    /**
     *  Display the event form and it's data using the event data.
     */
    public function editForm(Request $request)
    {
        // Get user permission.
        $userId = Auth::id();
        $user = User::where('_id', '=', $userId)->get()->first();
        $permission = $user->permission;

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
