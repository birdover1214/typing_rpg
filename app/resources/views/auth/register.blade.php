@extends('layouts.layout')

@section('content')
<div class="container">
    <div class="main_head">Register</div>
        <form method="POST" id="register_form" class="form" action="{{ route('register') }}">
            @csrf
            <div class="form_group">
                <label for="name" class="form_label"><i class="far fa-address-card"></i></label>

                <div class="form_input">
                    <input id="name" type="name" class="input_name @error('email') is-invalid @enderror" name="name" value="{{ old('name') }}" required placeholder="ニックネーム">

                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
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
                            <strong>{{ $message }}</strong>
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
                            <strong>{{ $message }}</strong>
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
                <div class="form_btn">
                    <button type="submit" class="start_btn">
                        START!
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
