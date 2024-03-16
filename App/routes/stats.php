<?php

use App\Http\Controllers\Stats\StatController;
use Illuminate\Support\Facades\Route;


Route::get('/sl', [StatController::class, 'create'])-> name('StatList');

Route::get('/sl/csv', [StatController::class, 'downloadCSV'])-> name('Excel');

Route::get('/sl/EventPercentGraph', [StatController::class, 'ePerGraph'])-> name('eventPercentGraph');
Route::get('/sl/UserDemoGraph', [StatController::class, 'userDemoGraph'])-> name('userDemoGraph');
Route::get('/sl/ExternalDataGraph', [StatController::class, 'externalDataGraph'])-> name('externalDataGraph');



