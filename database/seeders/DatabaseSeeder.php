<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\User;
use Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        User::create([
            'name' => 'Root',
            'email' => 'root@nouvist.my.id',
            'password' => Hash::make('ayamgoreng1337'),
        ]);

        User::create([
            'name' => 'Zildan Faisal',
            'email' => 'zildanfaisal@latiseducation.com',
            'password' => Hash::make('ayamgoreng1337'),
        ]);

        User::create([
            'name' => 'Galih',
            'email' => 'galih@latiseducation.com',
            'password' => Hash::make('ayamgoreng1337'),
        ]);

        User::create([
            'name' => 'HRD',
            'email' => 'hrd@latiseducation.com',
            'password' => Hash::make('ayamgoreng1337'),
        ]);

        Student::create([
            'name' => 'Yanto Galon Isi Ulang',
            'email' => 'yanto@gmail.com',
            'number' => '2026000001',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Budi Papan Seluncur',
            'email' => 'budi@gmail.com',
            'number' => '2026000002',
            'institution' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Siti Kipas Angin',
            'email' => 'siti@gmail.com',
            'number' => '2026000003',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Agus Termos Panas',
            'email' => 'agus@gmail.com',
            'number' => '2026000004',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Dewi Sapu Lidi',
            'email' => 'dewi@gmail.com',
            'number' => '2026000005',
            'institution' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Eko Rice Cooker',
            'email' => 'eko@gmail.com',
            'number' => '2026000006',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Rina Kasur Busa',
            'email' => 'rina@gmail.com',
            'number' => '2026000007',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Bambang Ember Plastik',
            'email' => 'bambang@gmail.com',
            'number' => '2026000008',
            'institution' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Lestari Taplak Meja',
            'email' => 'lestari@gmail.com',
            'number' => '2026000009',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Joko Jam Dinding',
            'email' => 'joko@gmail.com',
            'number' => '2026000010',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Andri Stop Kontak',
            'email' => 'andri@gmail.com',
            'number' => '2026000011',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Maya Gorden Jendela',
            'email' => 'maya@gmail.com',
            'number' => '2026000012',
            'institution' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Hendra Rak Piring',
            'email' => 'hendra@gmail.com',
            'number' => '2026000013',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Nia Keset Kaki',
            'email' => 'nia@gmail.com',
            'number' => '2026000014',
            'institution' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Tono Gayung Mandi',
            'email' => 'tono@gmail.com',
            'number' => '2026000015',
            'institution' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Nopis Mengakui Kedaulatan Rakyat',
            'email' => 'nouvist@outlook.com',
            'number' => '2026000016',
            'institution' => 'LatisEducation',
        ]);
    }
}
