<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->string('player_image');
            $table->integer('level')->default(1);
            $table->integer('hp')->default(30);
            $table->integer('attack')->default(1);
            $table->integer('defence')->default(0);
            $table->integer('exp')->default(0);
            $table->integer('next_exp')->default(3);
            $table->integer('equipment')->nullable();
            $table->timestamps();

            //外部キー制約
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('players', function (Blueprint $table) {
            $table->dropForeign('players_user_id_foreign');
        });
        Schema::dropIfExists('players');
    }
}
