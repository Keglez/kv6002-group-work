<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\Mail;
use App\Mail\mailevent;
use App\Models\User;
use App\Models\Event;

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

        $attendees = $event->event_attendees;
        array_push($attendees, (object) ['user_id' => $user->_id, 'user_perm'=>0]);

        $event -> event_attendees = $attendees;
        $event->save();

        $phonenumber = "+44 7547 603763";
        $useremail = $user->email;

        $this->mailindex('Event Joined', 'You have Joined the event', $useremail);
        $this->smsindex($phonenumber .'You have joined the event');

        return redirect('/');
    }

    
    
    public function LeaveEvent(Request $request){
        $userId = $request->id;
        $eventId = $request->eventId;
    }
}


    
