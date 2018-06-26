<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDevelopmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('developments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('slug')->unique();
            $table->string('logo');
            $table->string('img_featured');
            $table->string('name');
            $table->string('street');
            $table->string('number');
            $table->string('neighborhood');
            $table->string('city');
            $table->string('country');
            $table->string('zipcode');
            $table->string('rooms');
            $table->string('footage');
            $table->text('description');
            $table->enum('status', ['OBRAS', 'PRONTO', 'LANÇAMENTO']);
            $table->string('lat');
            $table->string('lng');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('developments');
    }
}
