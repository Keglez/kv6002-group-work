<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Messages\ChatController;

Route::get('/message', [ChatController::class, 'messageDash']) ->middleware(['auth', 'verified'])->name('chats');
Route::get('/event/message', [ChatController::class, 'messageDash']) ->middleware(['auth', 'verified'])->name('event.chat');
Route::post('/message/send', [ChatController::class, 'storeChatData']) ->middleware(['auth', 'verified'])->name('send_chat');