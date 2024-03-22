<?php

namespace App\Http\Controllers\Event;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class JoinEventController extends Controller
{
public function JoinEvent(Request $request){
    $userId = $request->id;
    $eventId = $request->eventId;
}

public function LeaveEvent(Request $request){
    $userId = $request->id;
    $eventId = $request->eventId;
}


}
