<?php

use App\Http\Controllers\Stats\StatController;
use App\Http\Controllers\Stats\CSVController;
use Illuminate\Support\Facades\Route;


Route::get('/sl', [StatController::class, 'create'])-> name('StatList');
Route::get('/sl/EventPercentGraph', [StatController::class, 'ePerGraph'])-> name('eventPercentGraph');
Route::get('/sl/UserDemoGraph', [StatController::class, 'userDemoGraph'])-> name('userDemoGraph');
Route::get('/sl/ExternalDataGraph', [StatController::class, 'externalDataGraph'])-> name('externalDataGraph');
Route::get('/sl/CSV//uData{id}', [CSVController::class, 'userData'])-> name("userdata");
Route::get('/sl/CSV/uList/{id}/{eventId}', [CSVController::class, 'getRegisterUsersOnEvent'])-> name('UserList');
Route::get('/sl/CSV/eList/{id}', [CSVController::class, 'getEvents'])-> name('EventList');
