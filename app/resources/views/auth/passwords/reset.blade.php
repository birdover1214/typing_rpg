@extends('layouts.layout')

@section('title', 'TypingRPG パスワードリセット')

@section('content')
<div id="app">
    <main class="site_main">
        <div class="container height_auto">
            <div class="main_head">Password Reset</div>
                <form method="POST" id="reset_password_form" class="form" action="{{ route('password.update') }}">
                    @csrf
                    <input type="hidden" name="token" value="{{ $token }}">

                    <div class="form_group">
                        <label for="email" class="form_label"><i class="far fa-envelope"></i></label>
                        
                        <div class="form_input">
                            <input id="email" type="email" class="input_email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="登録メールアドレス">
                        
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
                            <input id="password" type="password" class="input_password @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="パスワード(8文字以上)">
                            
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
                    
                    <div class="form_group column">
                        <div class="form_btn padding_btm">
                            <button type="submit" class="start_btn">
                                Reset Password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
@endsection
