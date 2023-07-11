<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class TestController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Index')->with('msg', 'Laravel with React');
    }
}
