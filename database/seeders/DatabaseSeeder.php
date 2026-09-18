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
            'password' => Hash::make('ayamgorengenak1337'),
        ]);

        Student::create([
            'name' => 'Yanto Galon Isi Ulang',
            'email' => 'yanto@gmail.com',
            'number' => '2026000001',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Budi Papan Seluncur',
            'email' => 'budi@gmail.com',
            'number' => '2026000002',
            'organization' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Siti Kipas Angin',
            'email' => 'siti@gmail.com',
            'number' => '2026000003',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Agus Termos Panas',
            'email' => 'agus@gmail.com',
            'number' => '2026000004',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Dewi Sapu Lidi',
            'email' => 'dewi@gmail.com',
            'number' => '2026000005',
            'organization' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Eko Rice Cooker',
            'email' => 'eko@gmail.com',
            'number' => '2026000006',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Rina Kasur Busa',
            'email' => 'rina@gmail.com',
            'number' => '2026000007',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Bambang Ember Plastik',
            'email' => 'bambang@gmail.com',
            'number' => '2026000008',
            'organization' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Lestari Taplak Meja',
            'email' => 'lestari@gmail.com',
            'number' => '2026000009',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Joko Jam Dinding',
            'email' => 'joko@gmail.com',
            'number' => '2026000010',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Andri Stop Kontak',
            'email' => 'andri@gmail.com',
            'number' => '2026000011',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Maya Gorden Jendela',
            'email' => 'maya@gmail.com',
            'number' => '2026000012',
            'organization' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Hendra Rak Piring',
            'email' => 'hendra@gmail.com',
            'number' => '2026000013',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Nia Keset Kaki',
            'email' => 'nia@gmail.com',
            'number' => '2026000014',
            'organization' => 'LatisEducation',
        ]);

        Student::create([
            'name' => 'Tono Gayung Mandi',
            'email' => 'tono@gmail.com',
            'number' => '2026000015',
            'organization' => 'TutorIndonesia',
        ]);

        Student::create([
            'name' => 'Nopis Mengakui Kedaulatan Rakyat',
            'email' => 'nouvist@outlook.com',
            'number' => '2026000016',
            'organization' => 'LatisEducation',
        ]);
    }
}
