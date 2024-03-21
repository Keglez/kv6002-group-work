<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\Organiser;

class EventInformationController extends Controller
{
    /**
     *  Show an organisations event information page.
     */
    public function show($slug)
    {        
        $event = Event::where('event_slug', '=', $slug)->first();

        return Inertia::render('Events/EventInfo', [
            'event' => $event
        ]);
    }
}