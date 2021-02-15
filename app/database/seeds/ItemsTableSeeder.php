<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->insert([
            //スライム
            [
                'name' => 'ナイフ',
                'image' => 'ナイフw50.png',
                'attack' => 1,
                'defence' => 0,
                'mistake_damage' => 1,
            ],
            //はにわ
            [
                'name' => '棍棒',
                'image' => '棍棒w50.png',
                'attack' => 1,
                'defence' => 1,
                'mistake_damage' => 1,
            ],
            //ゴースト
            [
                'name' => 'サイズ',
                'image' => 'サイズw50.png',
                'attack' => 2,
                'defence' => 0,
                'mistake_damage' => 2,
            ],
            //リベルフ
            [
                'name' => '熱を帯びたナイフ',
                'image' => '熱を帯びたナイフw50.png',
                'attack' => 3,
                'defence' => 1,
                'mistake_damage' => 2,
            ],
            //ゾンビ
            [
                'name' => 'ハルバード',
                'image' => 'ハルバードw50.png',
                'attack' => 6,
                'defence' => 2,
                'mistake_damage' => 3,
            ],
            //ツチノコ
            [
                'name' => 'バトルメイス',
                'image' => 'バトルメイスw50.png',
                'attack' => 5,
                'defence' => 3,
                'mistake_damage' => 3,
            ],
            //ベビーグリフォン
            [
                'name' => '鉄の剣',
                'image' => '鉄の剣w50.png',
                'attack' => 7,
                'defence' => 3,
                'mistake_damage' => 4,
            ],
            //ミミック
            [
                'name' => '金棒',
                'image' => '金棒w50.png',
                'attack' => 8,
                'defence' => 6,
                'mistake_damage' => 3,
            ],
            //シャドウ
            [
                'name' => 'ブラックソード',
                'image' => 'ブラックソードw50.png',
                'attack' => 11,
                'defence' => 4,
                'mistake_damage' => 6,
            ],
            //リガルオン
            [
                'name' => 'リガルエッジ',
                'image' => 'リガルエッジw50.png',
                'attack' => 15,
                'defence' => 5,
                'mistake_damage' => 6,
            ],
            //フレイムドラゴンキッズ
            [
                'name' => '燃える牙',
                'image' => '燃える牙w50.png',
                'attack' => 13,
                'defence' => 5,
                'mistake_damage' => 4,
            ],
            //死神
            [
                'name' => 'ダークサイズ',
                'image' => 'ダークサイズw50.png',
                'attack' => 20,
                'defence' => 3,
                'mistake_damage' => 9,
            ],
            //ゴーレム
            [
                'name' => 'ゴーレムハンマー',
                'image' => 'ゴーレムハンマーw50.png',
                'attack' => 15,
                'defence' => 8,
                'mistake_damage' => 5,
            ],
            //ダークナイト
            [
                'name' => 'バスタードソード',
                'image' => 'バスタードソードw50.png',
                'attack' => 18,
                'defence' => 8,
                'mistake_damage' => 7,
            ],
            //フェンリル
            [
                'name' => 'フェンリルの牙刀',
                'image' => 'フェンリルの牙刀w50.png',
                'attack' => 25,
                'defence' => 9,
                'mistake_damage' => 8,
            ],
            //ワイバーン
            [
                'name' => '翼竜の太刀',
                'image' => '翼竜の太刀w50.png',
                'attack' => 21,
                'defence' => 8,
                'mistake_damage' => 7,
            ],
            //グリフォン
            [
                'name' => 'グリフォンランス',
                'image' => 'グリフォンランスw50.png',
                'attack' => 25,
                'defence' => 10,
                'mistake_damage' => 7,
            ],
            //ライトニングバード
            [
                'name' => '蒼雷剣',
                'image' => '蒼雷剣w50.png',
                'attack' => 30,
                'defence' => 8,
                'mistake_damage' => 9,
            ],
            //フレイムドラゴン
            [
                'name' => '赤熱の剣',
                'image' => '赤熱の剣w50.png',
                'attack' => 34,
                'defence' => 9,
                'mistake_damage' => 11,
            ],
            //ドラゴン
            [
                'name' => 'ドラゴンキラー',
                'image' => 'ドラゴンキラーw50.png',
                'attack' => 38,
                'defence' => 10,
                'mistake_damage' => 10,
            ],
            //深きもの
            [
                'name' => '三叉槍',
                'image' => '三叉槍w50.png',
                'attack' => 32,
                'defence' => 12,
                'mistake_damage' => 7,
            ],
            //ティンダロスの猟犬
            [
                'name' => 'ヘルチャクラム',
                'image' => 'ヘルチャクラムw50.png',
                'attack' => 44,
                'defence' => 9,
                'mistake_damage' => 13,
            ],
            //チャウグナー
            [
                'name' => 'フォーンアックス',
                'image' => 'フォーンアックスw50.png',
                'attack' => 51,
                'defence' => 13,
                'mistake_damage' => 14,
            ],
            //アザトース
            [
                'name' => '魔剣アザトース',
                'image' => '魔剣アザトースw50.png',
                'attack' => 58,
                'defence' => 16,
                'mistake_damage' => 15,
            ],
            //ヨグ・ソトース
            [
                'name' => '光剣ヨグ・ソトス',
                'image' => '光剣ヨグソトスw30.png',
                'attack' => 60,
                'defence' => 20,
                'mistake_damage' => 10,
            ],
        ]);
    }
}
