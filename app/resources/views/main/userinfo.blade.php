@extends('layouts.layoutinfo')

@section('title', 'TypingRPG ユーザー情報')

@section('content')
<div id="app" class="page_info">
    <main class="site_main">
        <div class="container height_auto">
            <div class="main_head">User Info</div>
            @error('current_password')
            <span class="invalid-feedback current_password_feedback" role="alert">
                <p>内容を保存できませんでした。</p>
                <strong>※ {{ $message }}</strong>
            </span>
            @enderror
            @if(Session::has('flash_message'))
                <div class="flash_message">
                    <i class="fas fa-check faa-shake animated"></i>
                    {{ session('flash_message') }}
                </div>
            @endif
                <form method="POST" id="edit_form" class="form" action="{{ route('userEdit') }}">
                    @csrf
                    <div class="form_group">
                        <label for="name" class="form_label"><i class="far fa-user"></i></label>

                        <div class="form_input">
                            <input id="name" type="name" class="input_name @error('name') is-invalid @enderror" name="name" value="{{ strlen(old('name')) > 0 ? old('name') : $user->name }}" required placeholder="ニックネーム変更(20文字以内)">
                            
                            @error('name')
                            <span class="invalid-feedback" role="alert">
                                <strong>※ {{ $message }}</strong>
                            </span>
                            @enderror
                            <span class="error_field">
                                <strong id="name_error"></strong>
                            </span>
                        </div>
                    </div>
                
                    <div class="form_group">
                        <label for="email" class="form_label"><i class="far fa-envelope"></i></label>
                        
                        <div class="form_input">
                            <input id="email" type="email" class="input_email @error('email') is-invalid @enderror" name="email" value="{{ strlen(old('email')) > 0 ? old('email') : $user->email }}" required autocomplete="email" placeholder="メールアドレス変更">
                        
                            @error('email')
                            <span class="invalid-feedback" role="alert">
                                <strong>※ {{ $message }}</strong>
                            </span>
                            @enderror
                            <span class="error_field">
                                <strong id="email_error"></strong>
                            </span>
                        </div>
                    </div>
                
                    <div class="form_group">
                        <label for="password" class="form_label"><i class="fas fa-key"></i></label>
                        
                        <div class="form_input">
                            <input id="password" type="password" class="input_password @error('password') is-invalid @enderror" name="password" autocomplete="new-password" placeholder="パスワード変更(8文字以上)">
                            
                            @error('password')
                            <span class="invalid-feedback" role="alert">
                                <strong>※ {{ $message }}</strong>
                            </span>
                            @enderror
                            <span class="error_field">
                                <strong id="password_error"></strong>
                            </span>
                        </div>
                    </div>

                    <div class="form_group">
                        <label for="password-confirm" class="form_label"><span class="confirm_span"><i class="fas fa-key w_key"></i><i class="fas fa-key"></i></span></label>
                        
                        <div class="form_input">
                            <input id="password-confirm" type="password" class="input_password" name="password_confirmation" autocomplete="new-password" placeholder="変更パスワード再入力">
                        </div>
                    </div>
                    
                    <div class="form_group form_radio">
                        <label for="" class="radio_label">主人公を変更する場合は選択してください</label>
                        @error('player_image')
                        <span class="invalid-feedback" role="alert">
                            <strong>※ {{ $message }}</strong>
                        </span>
                        @enderror
                        <span class="error_field">
                            <strong id="radio_error"></strong>
                        </span>
                        <div class="select_player">
                            <input id="radio_man" type="radio" name="player_image" class="radio" value="1" {{ $user->player->player_image == 1 ? 'checked' : '' }}>
                            <label for="radio_man" class="player_images image_man">
                                <img src="{{ asset('/images/player_images/主人公男h150.png') }}" alt="" class="player_image">
                            </label>
                            <input id="radio_woman" type="radio" name="player_image" class="radio" value="2" {{ $user->player->player_image == 2 ? 'checked' : '' }}>
                            <label for="radio_woman" class="player_images image_woman">
                                <img src="{{ asset('/images/player_images/主人公女h150.png') }}" alt="" class="player_image">
                            </label>
                        </div>
                    </div>
                    <div class="player_init" title="キャラクター能力の初期化">
                        <p class="init_explain">
                            レベル・HP・攻撃力・防御力を初期状態に戻すことができます。<br>
                            フィールド開放状況と獲得したアイテムは現在のままでプレイ可能です。<br>
                            初期化する場合はチェックを入れてください。
                        </p>
                        <label for="player_init" class="check_label">
                            <input type="checkbox" name="init" id="player_init" value="init">
                            <div>キャラクター能力の初期化<span>キャラクター能力の初期化が選択されています</span></div>
                        </label>
                    </div>
                    <div class="form_group column">
                        <div class="form_btn">
                            <button id="edit_btn">
                                変更内容の確認
                            </button>
                        </div>
                    </div>
                    <div class="check_modal" id="edit_modal">
                        <div class="modal_window">
                            <div class="check_text_wrap">
                                <h2 class="check_head">編集の確認</h2>
                                <p class="check_text">
                                    変更内容を保存します。<br>
                                    <span>よろしければフォームに現在のパスワードを入力して、「変更内容を確定する」ボタンを押してください。</span><br>
                                    <strong class="check_init">キャラクター能力の初期化が選択されています。このまま変更を確定すると元には戻せません。</strong>
                                </p>
                            </div>
                            <div class="check_current_password">
                                <span class="error_field modal_error">
                                    <strong id="current_password_error"></strong>
                                </span>
                                <input type="password" name="current_password" id="current_password" class="input_password @error('current_password') is-invalid @enderror" placeholder="現在のパスワードを入力">
                                <i class="fas fa-key"></i>
                            </div>
                            <div class="form_button_wrap">
                                <input type="submit" class="modal_btn" id="decide_btn" disabled="true" value="変更内容を確定する">
                                <button class="modal_btn cancel_btn" id="edit_cancel_btn">キャンセル</button>
                            </div>
                        </div>
                    </div>
                </form>
                <form action="POST" id="delete_form" action="{{ route('userDelete') }}">
                    <input type="submit" value="登録の解除" id="delete_check">
                    <div class="check_modal" id="delete_modal">
                        <div class="modal_window delete_window">
                            <div class="check_text_wrap">
                                <h2 class="check_head">登録の解除</h2>
                                <p class="check_text">
                                    ユーザー登録を解除します。<br>
                                    <span>よろしければ確定ボタンを押してください。</span><br>
                                </p>
                            </div>
                            <div class="form_button_wrap">
                                <input type="submit" class="modal_btn" id="delete_btn" disabled="true" value="登録を解除する">
                                <button class="modal_btn cancel_btn" id="delete_cancel_btn">キャンセル</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>
@endsection
