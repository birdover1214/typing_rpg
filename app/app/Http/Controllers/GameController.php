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
    public function getData(Request $request) {

        $user = Auth::user();
        $field_id = $request->field_id;
        $dropItems = [];

        $field = Field::find($field_id);
        $player = $user->player()->first();
        $item = Item::where('id', $player->equipment);
        $monsters = Monster::where('field_id', $field_id)->get();
        foreach($monsters as $monster) {
            array_push($dropItems, Item::where('id', $monster->item_id)->first());
        }
        $questions = Question::where('field_id', $field_id)->get();

        return response(compact('user', 'field', 'player', 'item', 'monsters', 'dropItems', 'questions'));
    }

    public function setData(Request $request) {
        $res = $request->all();

        return response(compact('res'));
    }
}
