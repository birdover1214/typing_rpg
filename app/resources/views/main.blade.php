@extends('layouts.layout')

@section('title', 'TypingRPG')

@section('sounds')
<audio src ="{{ asset('/sounds/セレクト音.mp3') }}" id="selectAudio"></audio>
<audio src ="{{ asset('/sounds/タイプ音.mp3') }}" id="correctAudio"></audio>
<audio src ="{{ asset('/sounds/タイプミス32kbps.mp3') }}" id="missAudio"></audio>
<audio src ="{{ asset('/sounds/戦闘音32kbps.mp3') }}" id="battleAudio"></audio>
<audio src ="{{ asset('/sounds/戦闘勝利音32kbps.mp3') }}" id="victoryAudio"></audio>
<audio src ="{{ asset('/sounds/戦闘敗北音32kbps.mp3') }}" id="loseAudio"></audio>
<audio src ="{{ asset('/sounds/モンスター攻撃32kbps.mp3') }}" id="attackAudio"></audio>
@if($player->player_image == 1)
<audio src ="{{ asset('/sounds/戦闘開始男32kbps.mp3') }}" id="readyVoiceMan" class="readyVoice"></audio>
<audio src ="{{ asset('/sounds/勝利男32kbps.mp3') }}" id="victoryVoiceMan" class="victoryVoice"></audio>
<audio src ="{{ asset('/sounds/敗北男32kbps.mp3') }}" id="loseVoiceMan" class="loseVoice"></audio>
@else
<audio src ="{{ asset('/sounds/戦闘開始女32kbps.mp3') }}" id="readyVoiceWoman" class="readyVoice"></audio>
<audio src ="{{ asset('/sounds/勝利女32kbps.mp3') }}" id="victoryVoiceWoman" class="victoryVoice"></audio>
<audio src ="{{ asset('/sounds/敗北女32kbps.mp3') }}" id="loseVoiceWoman" class="loseVoice"></audio>
@endif
@endsection

@section('content')
<div class="container game_container">
    <div class="game_display">
        <div class="top_display">
            <div class="select_field_display">
                <form class="select_field">
                    @csrf
                    <div class="btn_wrap">
                        @for($i = 1; $i <= 3; $i++)
                        <div class="field_list">
                            <p class="field_name">{{ $fields->find($i)->name }}</p>
                            <p class="field_explain">{{ $fields->find($i)->field_explain }}</p>
                            <button class="field_btn" id="field{{$i}}" value="{{$i}}"></button>
                        </div>
                        @endfor
                    </div>
                    <div class="btn_wrap2">
                        @for($i = 4; $i <= 5; $i++)
                        <div class="field_list">
                            <button class="field_btn" id="field{{$i}}" value="{{$i}}"></button>
                            <p class="field_name">{{ $fields->find($i)->name }}</p>
                            <p class="field_explain">{{ $fields->find($i)->field_explain }}</p>
                        </div>
                        @endfor
                    </div>
                </form>
            </div>
            <div class="rpg_display">
                <div class="status_display">
                    <div class="player_status">
                        <p><i class="far fa-hand-rock"></i>：<span class="attack"></span> (<span class="item_attack"></span>)</p>
                        <p><i class="fas fa-shield-alt"></i>：<span class="defence"></span> (<span class="item_defence"></span>)</p>
                        <p><i class="far fa-tired"></i>：<span class="misstake_damage"></span></p>
                    </div>
                    <div class="status_player">
                        <p class="player_name"></p>
                        <div class="lvhp_container">
                            <p class="level">Lv：<span class="player_level"></span></p>
                            <p class="hp">HP：<span id="player_hp"></span></p>
                        </div>
                    </div>
                    <div class="status_monster">
                        <p class="monster_name"></p>
                        <p class="hp">HP：<span id="monster_hp"></span></p>
                    </div>
                </div>
                <div class="image_display">
                    <div class="item_equipment">
                        <p>装備</p>
                        <img src="" class="equipment_image">
                    </div>
                    <div class="player">
                        <img id="player_image" src="" alt="" class="player_image">
                    </div>
                    <div class="monster">
                        <img id="monster_image" src="" alt="" class="monster_image">
                    </div>
                </div>
            </div>
        </div>
        <div class="text_display">
            <div id="battle_text">
                @if($player->level == 1)
                    TypingRPGをプレイしていただきありがとうございます。<br>
                    まずはフィールドを選択してください
                @else
                    フィールドを選んでください
                @endif
            </div>
        </div>
        <div class="typing_display">
            <input type="button" id="battle_btn" value="BATTLE START!">
            <div id="count" class="bold"></div>
            <div id="ready_count" class="bold"></div>
            <h1 id="word" class="bold"></h1>
            <h2 id="word_kana" class="bold"></h2>
            <h2 id="word_romaji" class="bold"></h2>
            <div id="scoredis" class="bold"></div>
            <div id="press_enter" class="bold">Press Enter</div>
        </div>
    </div>
</div>
@endsection
