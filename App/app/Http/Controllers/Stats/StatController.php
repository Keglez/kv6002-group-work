<?php

namespace App\Http\Controllers\Stats;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class StatController extends Controller
{
    public function create()
    {
        $userId = Auth::id();
        $user = User::find($userId);
        $event = Event::all();
        return Inertia::render('Stats/StatList', [
            'events' => $event,
            'userPermissions' => $user->permission,
        ]);
    }


    public function eventPercentageGraph(Request $request)
    {
        $events = Event::where('event_orgi', '=', 'Keglez Co')->get();
        $eventNames = [];
        $avgAge = [];
        $min = 20;
        $max = 60;
        $AttendanceRate = rand(60, 100);
        $EventAttendance = [];
        $EventFeedback = [];
        $AttendeePerEvent = [];

        foreach ($events as $event) {
            $eventNames[] = $event->event_name;
            $avgAge[] = rand($min, $max);
            $EventAttendance[] = ["label" => $event->event_name,"Amount" => rand(50, 100)];
            $EventFeedback[] = ["label" => $event->event_name, "Amount" => rand(1, 5)];
            $AttendeePerEvent[] = ["label" => $event->event_name, "Amount" => count($event->event_attendees)];
        }
        return Inertia::render('Stats/EventPercentGraph', [
            'EventList' => $eventNames,
            'AverageAge' => $avgAge,
            'GlobalAttendancePercentage' => $AttendanceRate,
            'AttendeePerEvent' => $AttendeePerEvent,
            'EventFeedback' => $EventFeedback,
            'PerEventAttendance' => $EventAttendance,
            'user' => $request->id,
        ]);
    }
    public function userDemoGraph(Request $request)
    {
        $genderData = array(
            array(
                "label" => "Male",
                "Amount" => 7
            ),
            array(
                "label" => "Female",
                "Amount" => 3
            ),
            array(
                "label" => "Other",
                "Amount" => 1
            )
        );

        $ageData = array(
            array(
                "label" => "20-25",
                "Amount" => 6
            ),
            array(
                "label" => "25-30",
                "Amount" => 2
            ),
            array(
                "label" => "30-40",
                "Amount" => 2
            ),
            array(
                "label" => "40+",
                "Amount" => 1
            )
        );

        $roleData = array(
            array(
                "label" => "Normal User",
                "Amount" => 8
            ),
            array(
                "label" => "Event Organiser",
                "Amount" => 2
            ),
            array(
                "label" => "Admin",
                "Amount" => 1
            )
        );
        $locationData = array(
            array(
                "label" => "Malaysia",
                "Amount" => 8
            ),
            array(
                "label" => "United Kingdom",
                "Amount" => 2
            ),
            array(
                "label" => "Unknown",
                "Amount" => 1
            )
        );
        $languageData = array(
            array(
                "label" => "Malay",
                "Amount" => 9
            ),
            array(
                "label" => "English",
                "Amount" => 2
            ),
        );
        $ethinicityData = array(
            array(
                "label" => "Malaysian",
                "Amount" => 8
            ),
            array(
                "label" => "British",
                "Amount" => 1
            ),
            array(
                "label" => "Unkown",
                "Amount" => 1
            )
        );
        return Inertia::render('Stats/UserDemoGraph', [
            'gender' => $genderData,
            'age' => $ageData,
            'role' => $roleData,
            'userLocation' => $locationData,
            'userLanguage' => $languageData,
            'userEthnicity' => $ethinicityData,
            'user' => $request->id,
        ]);
    }
    public function externalDataGraph(Request $request)
    {
        $events = Event::all();
        $emails = rand(11,25);
        $text=$emails;
        $shares = rand(1,10);
        $eventAmount = count($events);
        $userAmount = count(User::all());
        $eventShares = [];

        foreach ($events as $event) {
            $eventShares[] = ["label" => $event->event_name, "Amount" => rand(1,3)];
        }

        $eventLocations = array(
            array(
                "label" => "Gua Musang",
                "Amount" => 6
            ),
            array(
                "label" => "Jeli",
                "Amount" => 2
            ),
            array(
                "label" => "Kampung Bukit Bedak",
                "Amount" => 2
            )
        );

        $eventCategories = array(
            array(
                "label" => "Mother's Meeting",
                "Amount" => 5
            ),
            array(
                "label" => "Food",
                "Amount" => 3
            ),
            array(
                "label" => "Sports",
                "Amount" => 3
            )
        );
        return Inertia::render('Stats/ExternalDataGraph', [
            'emailsSent' =>$emails,
            'textSent' => $text,
            'eventShares' => $shares,
            'amountOfEvents' =>$eventAmount,
            'amountOfUsers' =>$userAmount,
            'sharesByEvent' =>$eventShares,
            'popularLocations' =>$eventLocations,
            'eventsByCategory' =>$eventCategories,
            'user' => $request->id,
        ]);
    }
}
