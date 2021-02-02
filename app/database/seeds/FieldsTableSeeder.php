<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FieldsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fields')->insert([

            [
                'name' => '平原地帯',
                'image' => '平原w300.jpg',
                'field_explain' => '日本語(単語)'
            ],

            [
                'name' => '森林地帯',
                'image' => '森w300.jpg',
                'field_explain' => '英語(単語)'
            ],

            [
                'name' => '荒野地帯',
                'image' => '荒野w300.jpg',
                'field_explain' => '日本語(四字熟語)'
            ],

            [
                'name' => '山岳地帯',
                'image' => '山w300.jpg',
                'field_explain' => '英語(慣用句)'
            ],

            [
                'name' => '魔界',
                'image' => '魔界w300.jpg',
                'field_explain' => '日本語(俳句,ことわざ,名言)'
            ]
        ]);
    }
}
