<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Mail;
use App\Mail\mailevent;
use App\Models\User;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;

class ExtCommContorller extends Controller
{
    public function smsindex($subject){
        $sid = getenv("TWILIO_SID");
        $token = getenv("TWILIO_TOKEN");
        $sendernumber = getenv("TWILIO_PHONE");

        $twilio = new Client($sid, $token);

        $message = $twilio->messages
                            ->create("+44 7547 603763",
                                        [
                                            "body"=> $subject,
                                            "from"=> $sendernumber
                                        ]
                            );
    }

    public function mailindex($title, $text, $useremail){
        $subject = $title;
        $body = $text;

        Mail::to($useremail)->send(new mailevent($subject,$body));
    }
    public function JoinEvent(Request $request){
        $userId = $request->id;
        $eventId = $request->eventId;

        $user = User::where('_id', '=', $userId)->get()->first();
        $event = Event::find($eventId);


        //adds user to events table
        $attendees = $event->event_attendees;
        array_push($attendees, (object) ['user_id' => $user->_id, 'user_perm'=>0]);


        //adds events to user table
        $events = $user->events;
        array_push($events, (object) ['event_id'=> $event->_id]);

        $event -> event_attendees = $attendees;
        $event->save();

        $user -> events = $events;
        $user->save();

        $phonenumber = "+44 7547 603763";
        $useremail = $user->email;

        $this->mailindex('Event Joined', 'You have Joined the event', $useremail);
        $this->smsindex($phonenumber .'You have joined the event');

        return redirect('/');
    }

    
    
    public function LeaveEvent(Request $request){
        $userId = Auth::id();
        $user = User::where('_id', '=', $userId)->get()->first();

        $eventId = $request->id;
        $event = Event::find($eventId);

        $eventlist = $user->events;
        //dd($eventlist);

        $attendees = $event->event_attendees;


    $increment = 0;
        foreach ($eventlist as $e) {
                $key = array_search($eventId, $e);
                if($key != false)
                {
         array_splice($eventlist, $increment, 1);
                }
        $increment  = $increment +1;
        }

        $user->events = $eventlist;
        $user->save();

        $increment = 0;
        foreach ($attendees as $attendee) {
                $key = array_search($userId, $attendee);
                if($key != false)
                {
         array_splice($attendees, $increment, 1);
                }
        $increment  = $increment +1;
        }

        $event -> event_attendees = $attendees;
        $event->save();

        return redirect('/profile/events');
    }
}


    
