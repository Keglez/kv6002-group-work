<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Ticket;
use App\Models\Organiser;

class TicketInformationController extends Controller
{
    /**
     *  Show an organisations event information page.
     */
    public function show($slug)
    {        
        $event = Ticket::where('event_slug', '=', $slug)->first();

        return Inertia::render('Tickets/TicketInfo', [
            'event' => $event
        ]);
    }
}
