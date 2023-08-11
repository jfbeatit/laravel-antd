<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $captcha = captcha_src('flat');
        return Inertia::render('Admin/Auth/Login')->with('captcha', $captcha);
    }


}
