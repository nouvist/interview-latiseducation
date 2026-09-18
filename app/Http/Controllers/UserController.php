<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use Response;

class UserController extends Controller
{
    function index()
    {
        if (Auth::check()) return Response::redirectTo(route('root'));
        return inertia('login');
    }


    function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        $auth = Auth::attempt($credentials);
        if (!$auth) {
            return Response::redirectTo(route('login'))->withErrors([
                'message' => 'Kredensial tidak valid.',
            ]);
        }

        return Response::redirectTo(route('dashboard'));
    }

    function logout()
    {
        Auth::logout();
        return Response::redirectTo(route('login'));
    }
}
