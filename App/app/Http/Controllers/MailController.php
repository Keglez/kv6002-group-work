<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\mailevent;

class MailController extends Controller
{
    public function index(){
        $subject = 'Test Subject';
        $body = 'test Message';

        Mail::to('Megadbot@gmail.com')->send(new mailevent($subject,$body));
    }
}
