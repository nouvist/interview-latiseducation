<?php

namespace App\Http\Controllers;

use Auth;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Response;

class UserController extends Controller
{
    function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $auth = Auth::attempt($credentials);
        if (!$auth) {
            return Response::redirectTo(route('login'))->withErrors([
                'message' => 'Kredensial tidak valid.',
            ]);
        }

        return Response::redirectTo(route('dashboard'));
    }

    function changePassword(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'current_password' => 'required',
            'new_password' => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return Response::redirectTo(route('password'))->withErrors($validator);
        }

        $user = Auth::user();
        if (Hash::check($request->current_password, $user->password)) {
            $user->password = Hash::make($request->new_password);
            $user->save();
        } else {
            return Response::redirectTo(route('password'))->withErrors([
                'current_password' => 'Password saat ini tidak valid.',
            ]);
        }

        return Response::redirectTo(route('profile'));
    }


    function logout()
    {
        Auth::logout();
        return Response::redirectTo(route('login'));
    }
}
