<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMonstersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->id();
            $table->foreignId('field_id');
            $table->foreignId('item_id');
            $table->string('name');
            $table->string('image');
            $table->integer('hp');
            $table->integer('attack');
            $table->integer('attack_interval');
            $table->integer('exp');
            $table->timestamps();

            //外部キー制約
            $table->foreign('field_id')->references('id')->on('fields')->onDelete('cascade');
            $table->foreign('item_id')->references('id')->on('items')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('monsters', function (Blueprint $table) {
            $table->dropForeign('monsters_field_id_foreign');
            $table->dropForeign('monsters_item_id_foreign');
        });
        Schema::dropIfExists('monsters');
    }
}
