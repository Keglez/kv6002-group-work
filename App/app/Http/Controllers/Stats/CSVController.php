<?php
namespace App\Http\Controllers\Stats;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Models\Event;
use App\Models\User;

class CSVController extends Controller
{
    public function getEvents(Request $request)
    {

        $events = Event::all();
        $csvData = [['Event Name, Event Description, Event Date']];

        foreach ($events as $event) {
            $csvData[] = [
                $event->event_name,
                $event->event_desc,
                $event->event_date
            ];
        }

        // Create CSV file
        $csvFileName = 'eventlist.csv';
        $filePath = storage_path('app/' . $csvFileName);
        $file = fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [
            'Content-Type' => 'text/csv',
        ])->deleteFileAfterSend(true);
    }

    public function getUserData(Request $request)
    {

        $users = User::find($request->id);
        // Generate CSV content
        $csvData = [
            [
                'Name',
                'Email'
            ]
        ];

        foreach ($users as $user) {
            $csvData[] = [
                $user->_id,
                $user->name,
                $user->email
            ];
        }

        // Add more data as needed

        // Create CSV file
        $csvFileName = 'userData.csv';
        $filePath = storage_path('app/' . $csvFileName);
        $file = fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [
            'Content-Type' => 'text/csv',
        ])->deleteFileAfterSend(true);
    }


    public function getAllUsers(Request $request)
    {
        $users = User::all();
        $csvData = [['User ID, User Name, User Email']];

        foreach ($users as $user) {
            $csvData[] = [
                $user->_id,
                $user->name,
                $user->email
            ];
        }

        // Create CSV file
        $csvFileName = 'userList.csv';
        $filePath = storage_path('app/' . $csvFileName);
        $file = fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [
            'Content-Type' => 'text/csv',
        ])->deleteFileAfterSend(true);
    }


    public function getRegisterUsersOnEvent(Request $request)
    {
        echo $request->eventId;
        $event = Event::where('_id', '=', $request->eventId)->get()->first();
        $attendees = [];
        foreach ($event->attendees as $attendee) {
            $users = User::find($request->id);
            array_push($attendees, $attendee['user_id']);
        }
        // Generate CSV content
        $csvData = [['Event id', 'Event Name', 'User Name', 'User Email'],];
        foreach ($attendees as $attendee) {
            $csvData[] = [
                $request->eventId,
                $event->event_name,
                $attendee->_id,
                $attendee->name,
                $attendee->email
            ];
        }

        // Create CSV file
        $csvFileName = 'userList.csv';
        $filePath = storage_path('app/' . $csvFileName);
        $file = fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [
            'Content-Type' => 'text/csv',
        ])->deleteFileAfterSend(true);
    }




}
