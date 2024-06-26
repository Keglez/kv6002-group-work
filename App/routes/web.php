<?php


use App\Http\Controllers\ExtCommContorller;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
     return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


/**
 *  This route takes the user to the home page via
 *  the default URL (i.e., https://website.com/).
 */
Route::get('/dev-info', function () {
    phpinfo();
});


Route::middleware('auth')->group(function () {
     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

     Route::get('/profile/notif', [ProfileController::class, 'notif'])->name('profile.notif');
     Route::get('/profile/Edit', [ProfileController::class, 'Edit'])->name('profile.Edit');
});


Route::get('/post/{slug}', [PostController::class, 'show']);

Route::get('/mail', [ExtCommContorller::class, 'mailindex']);

Route::get('/sms', [ExtCommContorller::class, 'smsindex'])->name('SMS');

Route::get('/joiningevent/{id}/{eventId}', [ExtCommContorller::class,'JoinEvent'])->name('Joining_event');



require __DIR__.'/auth.php';
require __DIR__.'/events.php';
require __DIR__.'/stats.php';
require __DIR__.'/chats.php';
require __DIR__.'/tickets.php';
