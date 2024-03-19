<?php namespace App\Http\Controllers\Stats;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use App\Models\Event;

class CSVController extends Controller {
    public function getEvents(Request $request) {

        $events=Event::all();
        $csvData=[ ['Event Name, Event Description, Event Date']];

        foreach ($events as $event) {
            $csvData[]=[$event->event_name,
            $event->event_desc,
            $event->event_date];
        }

        // Create CSV file
        $csvFileName='eventlist.csv';
        $filePath=storage_path('app/'. $csvFileName);
        $file=fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [ 'Content-Type'=> 'text/csv',
            ])->deleteFileAfterSend(true);
    }

    public function getUserData(Request $request) {

        $userID=$request->id;
        // Generate CSV content
        $csvData=[ ['Name',
        'Email'],
        ['John Doe',
        $request->id],
        ['Jane Smith',
        'jane@example.com'],
        // Add more data as needed
        ];

        // Create CSV file
        $csvFileName='userData.csv';
        $filePath=storage_path('app/'. $csvFileName);
        $file=fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [ 'Content-Type'=> 'text/csv',
            ])->deleteFileAfterSend(true);
    }

    public function getRegisterUsersOnEvent (Request $request) {


        
        // Generate CSV content
        $csvData=[ ['Name',
        'Email'],
        ['John Doe',
        $request->eventId],
        ['Jane Smith',
        $request->id],
        // Add more data as needed
        ];

        // Create CSV file
        $csvFileName='userList.csv';
        $filePath=storage_path('app/'. $csvFileName);
        $file=fopen($filePath, 'w');

        foreach ($csvData as $line) {
            fputcsv($file, $line);
        }

        fclose($file);

        // Download CSV file
        return Response::download($filePath, $csvFileName, [ 'Content-Type'=> 'text/csv',
            ])->deleteFileAfterSend(true);
    }




}
