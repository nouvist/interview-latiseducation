<?php

use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    if (Auth::check()) return Response::redirectTo(route('students.index'));
    return Response::redirectTo(route('login'));
})->name('root');


Route::controller(UserController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/api/auth/login', 'login')->name('auth.login');

    Route::middleware('auth')->group(function () {
        Route::inertia('/profile', 'profile')->name('profile');
        Route::inertia('/profile/password', 'profile.password')->name('password');

        Route::post('/api/auth/logout', 'logout')->name('auth.logout');
        Route::post('/api/auth/password', 'changePassword')->name('auth.password');
    });
});

Route::controller(StudentController::class)->middleware('auth')->group(function () {
    Route::get('/dashboard', 'index')->name('students.index');
    Route::get('/student/new', 'create')->name('students.create');
    Route::get('/student/{student}', 'show')->name('students.show');

    Route::get('/api/students/datatables', 'datatables')->name('students.datatables');
    Route::post('/api/students', 'store')->name('students.store');

    Route::get('/api/students/{student}/edit', 'edit')->name('students.edit');
    Route::delete('/api/students/{student}', 'destroy')->name('students.destroy');
});

Route::inertia('/about', 'about')->name('about');
