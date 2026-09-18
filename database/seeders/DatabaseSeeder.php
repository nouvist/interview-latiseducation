<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // User::factory(10)->create();

        User::create([
            'name' => 'Root',
            'email' => 'root@nouvist.my.id',
            'password' => bcrypt('ayamgorengenak1337'),
        ]);
    }
}
