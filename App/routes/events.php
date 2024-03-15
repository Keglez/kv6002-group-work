<?php

use App\Http\Controllers\Event\EventController;

Route::get('/', [EventController::class, 'get']) -> name('event');