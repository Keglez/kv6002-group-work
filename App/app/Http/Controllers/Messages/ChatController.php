<?php

namespace App\Http\Controllers\Messages;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

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
        //Checks for correct chat ID
        $chats = Chat::find($request->_chatID);

        //pushes new message to chat via being an object
        $chats->push('messages', [(object)[
            'message' => $request->chat_message,
            'user_ids'=> $request->_userID,]
            ]);

        //saves to database
        $chats->save();

    }

}
