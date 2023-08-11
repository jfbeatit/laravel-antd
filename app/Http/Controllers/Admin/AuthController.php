<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function showLoginForm()
    {
        $captcha = captcha_src('flat');
        return Inertia::render('Admin/Auth/Login')
            ->with('captcha', $captcha);
    }


    public function login(Request $request)
    {
        $credentials = $request->validate([
            'captcha' => ['required', 'captcha'],
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt(Arr::except($credentials, 'captcha'), $request->remember ?? false)) {
            $request->session()->regenerate();
            return redirect()->intended('/admin/orders');
        }
        return back()->withErrors([
            'email' => '用户名或密码错误',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/admin/auth/login');
    }
}
