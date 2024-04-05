<?php

namespace App\Http\Controllers\Stats;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Event;

class StatController extends Controller
{
    public function create()
    {        
        $event = Event::all();
        return Inertia::render('Stats/StatList', [
            'events' => $event,
        ]);
    } 

    
    public function eventPercentageGraph()
    {
        return Inertia::render('Stats/EventPercentGraph', []);
    }
    public function userDemoGraph()
    {
        return Inertia::render('Stats/UserDemoGraph', []);
    }
    public function externalDataGraph()
    {
        return Inertia::render('Stats/ExternalDataGraph', []);
    }
}
