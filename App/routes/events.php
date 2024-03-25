<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Event\EventController;
use App\Http\Controllers\Event\CreateEventsController;
use App\Http\Controllers\Event\EventInformationController;
use App\Http\Controllers\Event\EventAttendeesController;


Route::get('/', [EventController::class, 'get']) -> name('event'); // Home page.

Route::middleware('auth')->group(function () {
    Route::get('/event/{slug}', [EventInformationController::class, 'show']) -> name('info'); // Event information page.

    // Events Dashboard
    Route::get('/profile/events', [EventController::class, 'eventDashboard']) -> name('event.dashboard');    


    // Event Forms
    Route::get('/profile/events/create', [EventController::class, 'createEventForm']) -> name('create'); // This will show the creat event form.
    Route::get('/profile/events/edit{id}', [EventController::class, 'editForm']) -> name('edit'); // This will show the edit event form.


    // Event Creation, Edit & Delete
    Route::post('/profile/events/create', [CreateEventsController::class, 'create']) -> name('store'); // This will create an event.
    Route::post('/profile/events/edit', [CreateEventsController::class, 'update']) -> name('update');
    Route::get('/profile/events.delete{id}', [CreateEventsController::class, 'destroy']) -> name('delete'); // This will delete/cancel an event.


    // Event Attendees Page
    Route::get('/profile/events/attendees/{slug}', [EventAttendeesController::class, 'attendeesDashboard']) -> name('attendees'); // This will delete/cancel an event.
    Route::get('/profile/events/attendees/{slug}/.delete{id}', [EventAttendeesController::class, 'removeAttendee']) -> name('attendees.delete'); // This will delete/cancel an event.    
}); 