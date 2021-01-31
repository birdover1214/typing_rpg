<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemPlayerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_player', function (Blueprint $table) {
            $table->id();
            $table->foreignId('item_id');
            $table->foreignId('player_id');
            $table->timestamps();

            //外部キー制約
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
            $table->foreign('player_id')->references('id')->on('players')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('item_player', function(Blueprint $table) {
            $table->dropForeign('item_player_item_id_foreign');
            $table->dropForeign('item_player_player_id_foreign');
        });
        Schema::dropIfExists('item_player');
    }
}
