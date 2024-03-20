<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Event\EventController;

Route::get('/', [EventController::class, 'get']) -> name('event');


Route::get('/profile/events', [EventController::class, 'eventDashboard']) -> name('event');

Route::get('/profile/events/create', [EventController::class, 'createEventForm']) -> name('create');
Route::post('/profile/events/create', [EventController::class, 'storeEventData']) -> name('store');