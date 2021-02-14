<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MonstersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('monsters')->insert([

            [
                'field_id' => 1,
                'item_id' => 1,
                'name' => 'スライム',
                'image' => 'スライムh90.png',
                'hp' => 100,
                'attack' => 2,
                'min_attack' => 1,
                'attack_interval' => 8,
                'exp' => 3,
            ],

            [
                'field_id' => 1,
                'item_id' => 2,
                'name' => 'はにわ',
                'image' => 'はにわh140.png',
                'hp' => 180,
                'attack' => 4,
                'min_attack' => 2,
                'attack_interval' => 8,
                'exp' => 4,
            ],

            [
                'field_id' => 1,
                'item_id' => 3,
                'name' => 'ゴースト',
                'image' => 'ゴーストh100.png',
                'hp' => 360,
                'attack' => 6,
                'min_attack' => 3,
                'attack_interval' => 8,
                'exp' => 5,
            ],

            [
                'field_id' => 1,
                'item_id' => 4,
                'name' => 'リベルフ',
                'image' => 'リベルフh110.png',
                'hp' => 580,
                'attack' => 5,
                'min_attack' => 3,
                'attack_interval' => 5,
                'exp' => 7,
            ],

            [
                'field_id' => 1,
                'item_id' => 5,
                'name' => 'ゾンビ',
                'image' => 'ゾンビh160.png',
                'hp' => 1000,
                'attack' => 10,
                'min_attack' => 4,
                'attack_interval' => 10,
                'exp' => 9,
            ],

            [
                'field_id' => 2,
                'item_id' => 6,
                'name' => 'ツチノコ',
                'image' => 'ツチノコh80.png',
                'hp' => 1200,
                'attack' => 10,
                'min_attack' => 5,
                'attack_interval' => 8,
                'exp' => 10,
            ],

            [
                'field_id' => 2,
                'item_id' => 7,
                'name' => 'ベビーグリフォン',
                'image' => 'ベビーグリフォンh110.png',
                'hp' => 1400,
                'attack' => 10,
                'min_attack' => 5,
                'attack_interval' => 6,
                'exp' => 13,
            ],

            [
                'field_id' => 2,
                'item_id' => 8,
                'name' => 'ミミック',
                'image' => 'ミミックh120.png',
                'hp' => 1800,
                'attack' => 20,
                'min_attack' => 7,
                'attack_interval' => 10,
                'exp' => 16,
            ],

            [
                'field_id' => 2,
                'item_id' => 9,
                'name' => 'シャドウ',
                'image' => 'シャドウh150.png',
                'hp' => 2200,
                'attack' => 21,
                'min_attack' => 10,
                'attack_interval' => 7,
                'exp' => 18,
            ],

            [
                'field_id' => 2,
                'item_id' => 10,
                'name' => 'リガルオン',
                'image' => 'リガルオンh180.png',
                'hp' => 2500,
                'attack' => 20,
                'min_attack' => 10,
                'attack_interval' => 5,
                'exp' => 25,
            ],

            [
                'field_id' => 3,
                'item_id' => 11,
                'name' => 'フレイムドラゴンキッズ',
                'image' => 'フレイムドラゴンキッズh130.png',
                'hp' => 2600,
                'attack' => 32,
                'min_attack' => 16,
                'attack_interval' => 8,
                'exp' => 23,
            ],

            [
                'field_id' => 3,
                'item_id' => 12,
                'name' => '死神',
                'image' => '死神h180.png',
                'hp' => 3500,
                'attack' => 44,
                'min_attack' => 22,
                'attack_interval' => 8,
                'exp' => 26,
            ],

            [
                'field_id' => 3,
                'item_id' => 13,
                'name' => 'ゴーレム',
                'image' => 'ゴーレムh200.png',
                'hp' => 4500,
                'attack' => 90,
                'min_attack' => 45,
                'attack_interval' => 15,
                'exp' => 30,
            ],

            [
                'field_id' => 3,
                'item_id' => 14,
                'name' => 'ダークナイト',
                'image' => 'ダークナイトh200.png',
                'hp' => 4500,
                'attack' => 42,
                'min_attack' => 21,
                'attack_interval' => 7,
                'exp' => 35,
            ],

            [
                'field_id' => 3,
                'item_id' => 15,
                'name' => 'フェンリル',
                'image' => 'フェンリルh190.png',
                'hp' => 5500,
                'attack' => 28,
                'min_attack' => 14,
                'attack_interval' => 4,
                'exp' => 50,
            ],

            [
                'field_id' => 4,
                'item_id' => 16,
                'name' => 'ワイバーン',
                'image' => 'ワイバーンh160.png',
                'hp' => 5000,
                'attack' => 49,
                'min_attack' => 24,
                'attack_interval' => 7,
                'exp' => 48,
            ],

            [
                'field_id' => 4,
                'item_id' => 17,
                'name' => 'グリフォン',
                'image' => 'グリフォンh200.png',
                'hp' => 6000,
                'attack' => 40,
                'min_attack' => 20,
                'attack_interval' => 5,
                'exp' => 58,
            ],

            [
                'field_id' => 4,
                'item_id' => 18,
                'name' => 'ライトニングバード',
                'image' => 'ライトニングバードh200.png',
                'hp' => 7000,
                'attack' => 45,
                'min_attack' => 22,
                'attack_interval' => 5,
                'exp' => 65,
            ],

            [
                'field_id' => 4,
                'item_id' => 19,
                'name' => 'フレイムドラゴン',
                'image' => 'フレイムドラゴンh200.png',
                'hp' => 8800,
                'attack' => 80,
                'min_attack' => 40,
                'attack_interval' => 8,
                'exp' => 74,
            ],

            [
                'field_id' => 4,
                'item_id' => 20,
                'name' => 'ドラゴン',
                'image' => 'ドラゴンh180.png',
                'hp' => 10000,
                'attack' => 60,
                'min_attack' => 30,
                'attack_interval' => 6,
                'exp' => 80,
            ],

            [
                'field_id' => 5,
                'item_id' => 21,
                'name' => '深きもの',
                'image' => '深きものh150.png',
                'hp' => 15000,
                'attack' => 72,
                'min_attack' => 36,
                'attack_interval' => 6,
                'exp' => 100,
            ],

            [
                'field_id' => 5,
                'item_id' => 22,
                'name' => 'ティンダロスの猟犬',
                'image' => 'ティンダロスの猟犬h200.png',
                'hp' => 20000,
                'attack' => 54,
                'min_attack' => 27,
                'attack_interval' => 4,
                'exp' => 120,
            ],

            [
                'field_id' => 5,
                'item_id' => 23,
                'name' => 'チャウグナー・フォーン',
                'image' => 'チャウグナーh200.png',
                'hp' => 25000,
                'attack' => 120,
                'min_attack' => 60,
                'attack_interval' => 8,
                'exp' => 150,
            ],

            [
                'field_id' => 5,
                'item_id' => 24,
                'name' => 'アザトース',
                'image' => 'アザトースh200.png',
                'hp' => 30000,
                'attack' => 90,
                'min_attack' => 45,
                'attack_interval' => 6,
                'exp' => 200,
            ],

            [
                'field_id' => 5,
                'item_id' => 25,
                'name' => 'ヨグソトース',
                'image' => 'ヨグソトースh200.png',
                'hp' => 50000,
                'attack' => 100,
                'min_attack' => 50,
                'attack_interval' => 5,
                'exp' => 300,
            ],
        ]);
    }
}
