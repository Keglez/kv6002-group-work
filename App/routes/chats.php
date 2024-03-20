<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Messages\ChatController;

Route::get('/message', [ChatController::class, 'messageDash']) ->middleware(['auth', 'verified'])->name('chats');;
