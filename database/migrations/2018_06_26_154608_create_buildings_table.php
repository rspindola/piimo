<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBuildingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buildings', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('terreno')->default(0);
            $table->integer('fundacao')->default(0);
            $table->integer('estrutura')->default(0);
            $table->integer('alvenaria')->default(0);
            $table->integer('instalacao')->default(0);
            $table->integer('revestimento')->default(0);
            $table->integer('acabamento')->default(0);
            $table->integer('entrega')->default(0);
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
        Schema::dropIfExists('buildings');
    }
}
