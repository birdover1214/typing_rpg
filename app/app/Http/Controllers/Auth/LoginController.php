<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
//twitterログイン用
use Socialite;
use App\Models\User;
use App\Models\Player;
use App\Models\Field;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Twitterログイン
     * 
     * 認証ページへリダイレクトする
     * 
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider()
    {
        return Socialite::driver('twitter')->redirect();
    }

    /**
     * Twitterからユーザー情報を取得
     * 
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback()
    {
        try {
            $user = Socialite::driver('twitter')->user();

            $socialUser = User::firstOrCreate([
                'token' => $user->token,
            ], [
                'token' => $user->token,
                'name' => $user->name,
                'email' => $user->email,
                'password' => Hash::make('password'),
            ]);

            Auth::login($socialUser, true);

            $player = Player::firstOrCreate([
                'user_id' => $socialUser->id,
            ], [
                'user_id' => $socialUser->id,
                'player_image' => 1,
            ]);

        }catch(\Exception $e) {
            dd($e);
            return redirect()->route('login');
        }

        return redirect('/');
    }
}
