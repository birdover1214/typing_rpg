<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Item;
use App\Models\User;
use App\Http\Requests\EditUserRequest;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function showInfo()
    {
        $user = Auth::user();
        $items = Item::all();

        return view('main.userinfo', compact('user', 'items'));
    }

    public function editInfo(EditUserRequest $request)
    {
        $user = Auth::user();
        $player = $user->player;

        //更新処理
        try {
            //ユーザーデータの更新
            $user->fill([
                'name' => $request->name,
                'email' => $request->email,
            ]);
            
            //新しいパスワードが入力されていた場合passwordも更新
            if($request->password) {
                $user->fill(['password' => Hash::make($request->password)]);
            }

            $user->save();

            //プレイヤーデータの更新
            $player->fill([
                'player_image' => $request->player_image,
            ]);

            if($request->init == 'init') {
                $player->fill([
                    'level' => 1,
                    'hp' => 30,
                    'attack' => 1,
                    'defence' => 0,
                    'exp' => 0,
                    'next_exp' => 3,
                ]);
            }
            
            $player->save();
            
        }catch(\Exception $e) {
            report($e);
            //エラー処理
            return redirect()->back()->with('flash_message', '更新に失敗しました');
        }

        return redirect()->back()->with('flash_message', '更新しました');
    }

    public function delete()
    {
        $user = Auth::user();

        User::findOrfail($user->id)->delete();

        return redirect(route('home'));
    }
}
