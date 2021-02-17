@extends('layouts.layout')

@section('title', 'TypingRPG ログイン')

@section('content')
<div id="app">
    <main class="site_main">
        <div class="container">
            <div class="main_head">{{ __('Login') }}</div>
                <form method="POST" id="login_form" class="form" action="{{ route('login') }}">
                    @csrf
                    <div class="form_group">
                        <label for="email" class="form_label"><i class="far fa-envelope"></i></label>
                        
                        <div class="form_input">
                            <input id="email" type="email" class="input_email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="メールアドレス">
                            
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    
                    <div class="form_group">
                        <label for="password" class="form_label"><i class="fas fa-key"></i></label>
                        
                        <div class="form_input">
                            <input id="password" type="password" class="input_password @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="パスワード">
                            
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror
                        </div>
                    </div>
                    
                    <div class="form_group">
                        <div class="form_check">
                            <input class="input_check" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                            
                            <label class="check_label" for="remember">
                                ログイン状態を維持する
                            </label>
                        </div>
                    </div>
                    
                    <div class="form_group column">
                        <div class="form_btn">
                            <button type="submit" class="login_btn submit_btn">
                                Login
                            </button>
                        </div>
                        @if (Route::has('password.request'))
                        <a class="btn btn-link" href="{{ route('password.request') }}">
                            パスワードを忘れた方はこちら
                        </a>
                        @endif
                        <div class="twitter_login_wrap">
                            <a href="{{ route('login.twitter') }}" id="twitter_login_btn"><i class="fab fa-twitter"></i>Twitterで簡単登録＆ログイン</a>
                        </div>
                    </div>
                </form>
                <div class="link_register">
                    <p class="text_register"><i class="fas fa-arrow-down faa-vertical animated"></i>新規登録はこちら</p>
                    <a href="{{ route('register') }}" class="register_btn"><span>Register</span></a>
                </div>
            </div>
        </div>
    </main>
</div>
    @endsection
