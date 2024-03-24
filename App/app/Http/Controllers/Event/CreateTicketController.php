<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Ticket;

class CreateTicketController extends Controller
{
    /**
     * Store the data for the event.
     */    

    public function create(Request $request)
    {
        $ticket_number = 0;
        // Dummy data.
        //$organiser = 'Keglez Co';

        // Create and store new event.
        $event = new Ticket;
        
        $formatted_date = str_replace("-", "/", $request->tickets_date) . " [25-3-24]";

        $event->tickets_title = $request->event_name;
        $event->tickets_desc = $request->event_desc;
        $event->tickets_date = $formatted_date;
        $event->tickets_num = $ticket_number + 1;

        $ticket_number = $ticket_number + 1;

        $event->save();

        // Get events ready to display on dashboard.
        //$event = Event::where('event_orgi', '=', $organiser)->get();

        // Go back to the events dashboard.
        return redirect('profile/tickets');
    }


    /**
     *  Delete the event data.
     */
    public function destroy(Request $request)
    {        
        $event = Event::find($request->id);
        $event->delete();

        return redirect('profile/tickets');
    }


    /**
     *  Update the event data.
     */
    public function update(Request $request)
    {
        $event = Ticket::find($request->id);

        $formatted_date = str_replace("-", "/", $request->tickets_date) . " [25-3-24]";

        $event->tickets_title = $request->event_name;
        $event->tickets_desc = $request->event_desc;
        $event->tickets_date = $formatted_date;
        $event->tickets_num = $request->tickets_num;

        $event->save();

        // Go back to the events dashboard.
        return redirect('profile/tickets');
    }

}
