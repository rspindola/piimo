<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use Faker\Factory as Faker;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();
        foreach (range(1,100) as $index) {
            DB::table('leads')->insert([
                'area' => 'Contato E-mail',
                'name' => $faker->text(),
                'email' => $faker->email(),
                'phone' => $faker->e164PhoneNumber(),
                'message' => $faker->text(),
                'city' => $faker->city(),
            ]);
        }

        foreach (range(1,100) as $index) {
            DB::table('leads')->insert([
                'area' => 'Contato Whatsapp',
                'name' => $faker->text(),
                'email' => $faker->email(),
                'phone' => $faker->e164PhoneNumber(),
                'message' => $faker->text(),
                'city' => $faker->city(),
            ]);
        }

        foreach (range(1,100) as $index) {
            DB::table('leads')->insert([
                'area' => 'Contato Ligação',
                'name' => $faker->text(),
                'email' => $faker->email(),
                'phone' => $faker->e164PhoneNumber(),
                'message' => $faker->text(),
                'city' => $faker->city(),
            ]);
        }

        foreach (range(1,100) as $index) {
            DB::table('newsletters')->insert([
                'area' => 'Contato Ligação',
                'name' => $faker->text(),
                'email' => $faker->email(),
            ]);
        }

        foreach (range(1,100) as $index) {
            DB::table('contacts')->insert([
                'area' => 'Contato Ligação',
                'name' => $faker->text(),
                'email' => $faker->email(),
                'phone' => $faker->e164PhoneNumber(),
                'message' => $faker->text(),
                'development' => $faker->city(),
                'unity' => $faker->state(),
                'area' => $faker->text(),
                'isClient' => $faker->text(),
            ]);
        }
    }
}
