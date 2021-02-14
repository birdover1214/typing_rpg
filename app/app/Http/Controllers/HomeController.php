<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Player;
use App\Models\Field;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        //ログインチェック
        if(Auth::check()) {
            $user = Auth::user();
<<<<<<< HEAD
            $player = $user->player;
            $fields = Field::all();

            //各フィールドの勝利数を別配列として渡す
            $victories = [];
            array_push($victories,
                $player->field1_victory_count,
                $player->field2_victory_count,
                $player->field3_victory_count,
                $player->field4_victory_count,
                $player->field5_victory_count);

            return view('main.main', compact('player', 'fields', 'victories'));
=======
            $player = $user->player()->first();
            $fields = Field::all();

            return view('main', compact('player', 'fields'));
>>>>>>> origin/master
        }

        return view('auth.login');
    }
}
