<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if (Auth::check()) return Response::redirectTo(route('dashboard'));
    return Response::redirectTo(route('login'));
})->name('root');

Route::controller(UserController::class)->group(function () {
    Route::get('/login', 'index')->name('login');

    Route::post('/api/auth/login', 'login')->name('auth.login');
    Route::post('/api/auth/logout', 'logout')->name('auth.logout');
});

Route::inertia('/dashboard', 'dashboard')->name('dashboard');
Route::inertia('/profile', 'profile')->name('profile');
Route::inertia('/about', 'about')->name('about');
