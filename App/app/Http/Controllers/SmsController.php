<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;

class SmsController extends Controller
{
    public function smsindex(){
        $sid = getenv("TWILIO_SID");
        $token = getenv("TWILIO_TOKEN");
        $sendernumber = getenv("TWILIO_PHONE");

        $twilio = new Client($sid, $token);

        $message = $twilio->messages
                            ->create("+44 7547 603763",
                                        [
                                            "body"=> "Testing, testing? over.",
                                            "from"=> $sendernumber
                                        ]
                            );
        dd("Message");
    }
}
