<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Event\TicketController;
use App\Http\Controllers\Event\CreateTicketController;
use App\Http\Controllers\Event\TicketInformationController;


Route::get('/tickets', [TicketController::class, 'get']) -> name('tickets'); // Home page.
Route::get('/tickets/{slug}', [EventInformationController::class, 'show']) -> name('info'); // Event information page.


Route::get('/profile/tickets', [TicketController::class, 'eventDashboard']) -> name('event');


Route::get('/profile/tickets/create', [TicketController::class, 'createEventForm']) -> name('create'); // This will show the creat event form.
Route::get('/profile/tickets/edit{id}', [TicketController::class, 'editForm']) -> name('edit'); // This will show the edit event form.

Route::post('/profile/tickets/create', [CreateTicketController::class, 'create']) -> name('store'); // This will create an event.
Route::post('/profile/tickets/edit', [CreateTicketController::class, 'update']) -> name('update');
Route::get('/profile/tickets.delete{id}', [CreateTicketController::class, 'destroy']) -> name('delete'); // This will delete/cancel an event.

