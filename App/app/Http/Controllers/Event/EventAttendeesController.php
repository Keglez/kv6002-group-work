<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;

class EventAttendeesController extends Controller
{
    /**
     *  This will display the event attendees dashboard.
     */
    public function attendeesDashboard(Request $request)
    {
        $userId = Auth::id();
        $user = User::where('_id', '=', $userId)->get()->first();
        $permission = $user->permission;

        if ($permission == 1) // If the user is an organiser...
        {
            $event = Event::where('event_slug', '=', $request->slug)->get()->first();
            $users = [];
    
    
            // Finds a user and pushes them to the user array.
            if($event->event_attendees)
            {
                foreach($event->event_attendees as $attendee)
                {
                    $user = User::find($attendee['user_id']);
                    array_push($users, $user);
                }
            }
    
    
            // Renders the webpage.
            return Inertia::render('Events/EventAttendees', [
                'event' => $event,
                'users' => $users
            ]);                        
        }
        else
        {
            // Go back to the user events dashboard.
            return redirect('profile/events');
        }
    }


    /**
     *  This will remove an attendee from the event.
     */
    public function removeAttendee(Request $request)
    {
        $user = User::find($request->id);
        $event = Event::where('event_slug', '=', $request->slug)->get()->first();
        $attendees = $event->event_attendees;        

        // Not efficient but works. Larger attendee lists will require a faster solution.
        for ($i=0; $i < sizeof($attendees); $i++) 
        {
            $attendee = $attendees[$i];
            if($attendee['user_id'] == $request->id)
            {
                unset($attendees[$i]);                
            }
        }

        $event->event_attendees = $attendees;
        $event->save();

        // Go back to the events dashboard.
        return redirect('/profile/events/attendees/' . $request->slug);
    }
}
