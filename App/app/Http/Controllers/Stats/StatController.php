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
        return Inertia::render('Stats/StatList');
    } 

    public function downloadCSV($data)
    {

    }
    
    public function eventPercentageGraph()
    {
        return Inertia::render('Stats/eventPercentGraph', []);
    }
    public function userDemoGraph()
    {
        return Inertia::render('Stats/UserDemoGraph', []);
    }
    public function externalDataGraph()
    {
        return Inertia::render('Stats/externalDataGraph', []);
    }
}
