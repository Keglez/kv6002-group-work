<?php

use App\Http\Controllers\Stats\StatController;
use App\Http\Controllers\Stats\CSVController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/sl', [StatController::class, 'create'])->name('StatList');

    Route::get('/sl/EventPercentGraph/{id}', [StatController::class, 'eventPercentageGraph'])->name('eventPercentGraph');
    Route::get('/sl/UserDemoGraph/{id}', [StatController::class, 'userDemoGraph'])->name('userDemoGraph');
    Route::get('/sl/ExternalDataGraph/{id}', [StatController::class, 'externalDataGraph'])->name('externalDataGraph');


    Route::get('/sl/CSV//uData{id}', [CSVController::class, 'getUserData'])->name("userdata");
    Route::get('/sl/CSV/uList/{id}/{eventId}', [CSVController::class, 'getRegisterUsersOnEvent'])->name('UserList');
    Route::get('/sl/CSV/eList/{id}', [CSVController::class, 'getEvents'])->name('EventList');
    Route::get('/sl/CSV/UaList/{id}', [CSVController::class, 'getAllUsers'])->name('AllUsers');

 });

