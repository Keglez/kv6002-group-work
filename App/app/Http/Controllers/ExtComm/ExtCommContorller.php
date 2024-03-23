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
        dd("Message");
    }

    public function mailindex($subject, $body, $useremail){
        $subject = 'Test Subject';
        $body = 'You have Joined the Event';


        Mail::to($useremail)->send(new mailevent($subject,$body));
    }
    public function JoinEvent(Request $request){
        $userId = $request->id;
        $eventId = $request->eventId;

        $user = User::where('_id', '=', $userId)->get();
        $event = Event::where('_id', '=', $eventId)->get();
    }

    
    
    public function LeaveEvent(Request $request){
        $userId = $request->id;
        $eventId = $request->eventId;
    }
}


    
