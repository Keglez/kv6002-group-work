<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;


use Illuminate\Http\Request;
use App\Models\Event;

class EventController extends Controller
{
    public function show($slug)
    {
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        //$event = Event::all();
        $event = new Event;

        

        // Check if the post exists
        if (!$event) {
            abort(404); // or redirect to a 404 page
        }
    
        
    }

    public function get()
    {        
        //$event = Event::where('event_name', '=', 'Pizza Party Extravaganza')->first();
        $event = Event::all();

        return Inertia::render('Home', [
            'events' => $event,
        ]);
    }    
}
