@extends('layouts.layout')

@section('content')
<div class="container">
    <div class="main_head">Reset Password</div>
        <form method="POST" id="reset_password_form" class="form" action="{{ route('password.email') }}">
            @csrf

            <div class="form_group">
                <label for="email" class="form_label"><i class="far fa-envelope"></i></label>

                <div class="form_input">
                    <input id="email" type="email" class="input_email @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="メールアドレス">

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
            </div>

            <div class="form_group column">
                <div class="form_btn">
                    <button type="submit" id="password_reset" class="password_reset_btn submit_btn">
                        パスワードリセットメールを送信
                    </button>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection
