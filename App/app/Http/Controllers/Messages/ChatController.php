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



    public function storeChatData(Request $request)
    {

        $chats = new Chat;

        // Create an store new event.        
        $user_id = $request->_userID;
        $chat_id = $request->_chatID;
        $new_message = $request->chat_message;

        // Get events ready to display on dashboard.
        $chats = Chat::where('_id', '=', $chat_id)->get();

        $chatlog = $chats -> messages;

        echo $chatlog;
        
        $chats->save();

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
