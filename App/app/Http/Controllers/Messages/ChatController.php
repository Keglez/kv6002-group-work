<?php

namespace App\Http\Controllers\Messages;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


use Illuminate\Http\Request;
use App\Models\Chat;

class ChatController extends Controller
{
    /**
     * 
     */
    public function messageDash()
    {        
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $chats = Chat::all()->take(1);
        

        return Inertia::render('ChatTemp', [
            'chats' => $chats,
        ]);
    }


    /**
     * Event Dashboard
     
    public function eventDashboard()
    {
        $organiser = 'Keglez Co';

        $event = Event::where('event_orgi', '=', $organiser)->get();        
        

        return Inertia::render('Events/EventDashboard', [
            'events' => $event,
            'organiser' => $organiser,
        ]);
    }
    */
    /**
     * Create Event
     
    public function createEvent()
    {
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Event::all()->take(3);
        

        return Inertia::render('Events/CreateEvent', [
            'events' => $event,
        ]);
    }
    */
}
