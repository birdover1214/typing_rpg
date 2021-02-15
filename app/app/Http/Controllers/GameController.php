<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Player;
use App\Models\Monster;
use App\Models\Field;
use App\Models\Question;
use App\Models\Item;

class GameController extends Controller
{
    public function getData(Request $request)
    {

        $user = Auth::user();
        $field_id = $request->field_id;
        $dropItems = [];

        $field = Field::find($field_id);
        $player = $user->player;
        $equip_item = Item::find($player->equipment);
        $questions = Question::where('field_id', $field_id)->get();
        $monsters = Monster::where('field_id', $field_id)->get();

        foreach($monsters as $monster) {
            array_push($dropItems, Item::where('id', $monster->item_id)->first());
        }

        $having_items = [];

        foreach($player->items as $item) {
            array_push($having_items, $item);
        }
        //変数にセットした装備品をidの昇順でソート
        if($having_items != []) {
            foreach($having_items as $key => $value) {
                $id[$key] = $value['id'];
            }
            array_multisort($id, SORT_ASC, $having_items);
        }

        return response(compact('user', 'field', 'player', 'equip_item', 'monsters', 'dropItems', 'questions', 'having_items'));
    }

    public function setData(Request $request)
    {
        $player = Player::find($request->id);
        $dropItem = Item::find($request->get_item);

        if(isset($request->get_item)) {
            $dropItem->players()->attach($player->id);
        }
        unset($request->get_item);

        try {
            $player->fill($request->all())->save();
        }catch(\Exception $e) {
            report($e);
            return response(compact('e'));
        }
    }

    public function getItem()
    {
        $user = Auth::user();
        $player = $user->player;
        $equip_item = Item::find($player->equipment);

        $items = [];

        foreach($player->items as $item) {
            array_push($items, $item);
        }
        //変数にセットした装備品をidの昇順でソート
        if($items != []) {
            foreach($items as $key => $value) {
                $id[$key] = $value['id'];
            }
            array_multisort($id, SORT_ASC, $items);
        }

        return response(compact('items', 'equip_item'));
    }

    public function setItem(Request $request)
    {
        $user = Auth::user();
        $player = $user->player;

        try {
            $player->equipment = $request->id;

            $player->save();
        }catch(\Exception $e) {
            report($e);
            return response(compact('e'));
        }

        $item = Item::find($request->id);

        return response(compact('item'));
    }
}