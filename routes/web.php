<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/dashboard', 'dashboard')->name('dashboard');
Route::inertia('/profile', 'profile')->name('profile');
Route::inertia('/about', 'about')->name('about');
