@extends('layouts.layout')

@section('title', 'TypingRPG 新規登録')

@section('content')
<div class="container height_auto">
    <div class="main_head">Register</div>
        <form method="POST" id="register_form" class="form" action="{{ route('register') }}">
            @csrf
            <div class="form_group">
                <label for="name" class="form_label"><i class="far fa-address-card"></i></label>

                <div class="form_input">
                    <input id="name" type="name" class="input_name @error('email') is-invalid @enderror" name="name" value="{{ old('name') }}" required placeholder="ニックネーム">

                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>※ {{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="form_group">
                <label for="email" class="form_label"><i class="far fa-envelope"></i></label>

                <div class="form_input">
                    <input id="email" type="email" class="input_email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="メールアドレス">

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>※ {{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="form_group">
                <label for="password" class="form_label"><i class="fas fa-key"></i></label>

                <div class="form_input">
                    <input id="password" type="password" class="input_password @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="パスワード">

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>※ {{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="form_group">
                <label for="password-confirm" class="form_label"><span class="confirm_span"><i class="fas fa-key w_key"></i><i class="fas fa-key"></i></span></label>

                <div class="form_input">
                    <input id="password-confirm" type="password" class="input_password" name="password_confirmation" required autocomplete="new-password" placeholder="パスワード再入力">
                </div>
            </div>

            <div class="form_group form_radio">
                <label for="" class="radio_label">主人公を選択してください</label>
                @error('player_image')
                    <span class="invalid-feedback" role="alert">
                        <strong>※ {{ $message }}</strong>
                    </span>
                @enderror
                <div class="select_player">
                    <input id="radio_man" type="radio" name="player_image" class="radio" value="1">
                    <label for="radio_man" class="player_images image_man">
                        <img src="{{ asset('/images/player_images/主人公男h150.png') }}" alt="" class="player_image">
                    </label>
                    <input id="radio_woman" type="radio" name="player_image" class="radio" value="2">
                    <label for="radio_woman" class="player_images image_woman">
                        <img src="{{ asset('/images/player_images/主人公女h150.png') }}" alt="" class="player_image">
                    </label>
                </div>
            </div>
            <div class="form_group column">
                <div class="form_btn padding_btm">
                    <button type="submit" class="start_btn">
                        START!
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
