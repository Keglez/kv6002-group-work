<?php

namespace App\Http\Controllers\Event;
use App\Http\Controllers\Controller;
use Inertia\Inertia;

use Illuminate\Http\Request;
use App\Models\Event;

class CreateEventsController extends Controller
{
    /**
     * Store the data for the event.
     */
    public function create(Request $request)
    {
        // Dummy data.
        $organiser = 'Keglez Co';

        // Create and store new event.
        $event = new Event;

        $request->validate([
            'event_name' => 'required|string|max:255',
            'event_desc' => 'required|string|max:255',
            'event_orgi' => 'required|string|max:255',
            'event_date' => 'required',
            'event_date' => 'required',
            'event_start_time' => 'required',
            'event_end_time' => 'required',
            'event_thumb' => 'required|string|max:255',
            'event_location' => 'required|string|max:255',
        ]);

        
        $formatted_date = str_replace("-", "/", $request->event_date) . " [" . $request->event_start_time . " - " . $request->event_end_time . "]";
        $event_slug = strtolower(str_replace(" ", "-", $request->event_orgi) . "-" . str_replace(" ", "-", $request->event_name));

        $event->event_name = $request->event_name;
        $event->event_desc = $request->event_desc;
        $event->event_orgi = $request->event_orgi;
        $event->event_date = $formatted_date;
        $event->event_thumb = $request->event_thumb;
        $event->event_slug = $event_slug;
        $event->event_location = $request->event_location;
        $event->event_attendees = $request->event_attendees;

        $event->save();

        // Get events ready to display on dashboard.
        $event = Event::where('event_orgi', '=', $organiser)->get();

        // Go back to the events dashboard.
        return redirect('profile/events');
    }


    /**
     *  Delete the event data.
     */
    public function destroy(Request $request)
    {        
        $event = Event::find($request->id);
        $event->delete();

        return redirect('profile/events');
    }


    /**
     *  Update the event data.
     */
    public function update(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string|max:255',
            'event_desc' => 'required|string|max:255',
            'event_orgi' => 'required|string|max:255',
            'event_date' => 'required',
            'event_date' => 'required',
            'event_start_time' => 'required',
            'event_end_time' => 'required',
            'event_thumb' => 'required|string|max:255',
            'event_location' => 'required|string|max:255',
        ]);

        $event = Event::find($request->id);

        $formatted_date = str_replace("-", "/", $request->event_date) . " [" . $request->event_start_time . " - " . $request->event_end_time . "]";
        $event_slug = strtolower(str_replace(" ", "-", $request->event_orgi) . "-" . str_replace(" ", "-", $request->event_name));

        $event->event_name = $request->event_name;
        $event->event_desc = $request->event_desc;
        $event->event_orgi = $request->event_orgi;
        $event->event_date = $formatted_date;
        $event->event_thumb = $request->event_thumb;
        $event->event_slug = $event_slug;

        $event->save();

        // Go back to the events dashboard.
        return redirect('profile/events');
    }

}