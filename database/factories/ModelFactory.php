<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(App\Leads::class, function (Faker\Generator $faker) {
    return [
        'area' => $faker->sentence(5),
        'name' => $faker->text(),
        'email' => $faker->email(),
        'phone' => $faker->e164PhoneNumber(),
        'message' => $faker->text(),
        'city' => $faker->city(),
        'neighborhood' => $faker->state(),
        'utm_source' => $faker->text(),
        'utm_medium' => $faker->text(),
        'utm_campaign' => $faker->text(),
    ];
});