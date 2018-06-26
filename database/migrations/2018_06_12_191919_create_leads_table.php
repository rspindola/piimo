<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLeadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->increments('id');
            $table->string('area');
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->text('message');
            $table->string('city')->nullable();
            $table->string('neighborhood')->nullable();
            $table->string('utm_source')->default('Desconhecido');
            $table->string('utm_medium')->default('Desconhecido');
            $table->string('utm_campaign')->default('Desconhecido');
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
        Schema::dropIfExists('leads');
    }
}
