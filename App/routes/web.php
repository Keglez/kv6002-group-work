<?php

use App\Http\Controllers\PostController;
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

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


/**
 *  This route takes the user to the home page via
 *  the default URL (i.e., https://website.com/).
 */
Route::get('/', function() {
    return Inertia::render('Home');
});


/**
 * This route takes the user to the messages page.
 */
Route::get('/message', function () {
    return Inertia::render('ChatTemp');
});//->middleware(['auth', 'verified'])->name('message');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/sl', function () {
    return Inertia::render('Stats/StatList');
});

require __DIR__.'/auth.php';


Route::get('/post/{slug}', [PostController::class, 'show']);