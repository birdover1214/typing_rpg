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
            $player = $user->player()->first();
            $fields = Field::all();

            return view('main', compact('player', 'fields'));
        }

        return view('auth.login');
    }
}
