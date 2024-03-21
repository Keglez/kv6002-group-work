<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

use App\Http\Controllers\Event\EventController;
use App\Http\Controllers\Event\EventInformationController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('posts', PostController::class)->only([
    'destroy', 'show', 'store', 'update'
]);


Route::resource('events', EventController::class)->only([
    'show'
 ]);


// Not Found
Route::fallback(function(){
    return response()->json(['message' => 'Resource not found.'], 404);
});