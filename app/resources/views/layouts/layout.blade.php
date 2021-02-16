<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    @yield('scripts')
    @yield('sounds')

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css">
    
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.0.10/font-awesome-animation.css" type="text/css" media="all" />
</head>
<body>
    <header class="site_header">
        <div class="site_header_start">
            <a href="{{ url('/') }}" class="header_brand">
                TypingRPG
            </a>
        </div>
        <div class="site_header_middle">
            @auth
                <ul class="navbar_middle">
                    <li class="nav_middle_item">
                        <button id="change_equipment_btn" class="nav_middle">装備変更</button>
                    </li>
                    <li class="nav_middle_item">
                        <button id="change_field_btn" class="nav_middle">フィールド変更</button>
                    </li>
                    <li class="nav_middle_item">
                        <button id="battle_reset" class="nav_middle">バトルリセット(Escキー)</button>
                    </li>
                    <li class="nav_middle_item">
                        <a id="user_info" href="{{ route('userInfo') }}" class="nav_middle">ユーザー情報</a>
                    </li>
                </ul>
            @endauth
        </div>
        <!-- Right Side Of Navbar -->
        <div class="site_header_end">
            <ul class="navbar_right">
                <!-- Authentication Links -->
                @guest
                    <li class="nav-item">
                        <a class="login_link" href="{{ route('login') }}">ログイン</a>
                    </li>
                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="register_link" href="{{ route('register') }}">新規登録</a>
                        </li>
                    @endif
                @else
                    <li class="nav-item">
                        <button id="show_info"><i class="far fa-question-circle"></i></button>
                    </li>
                    <li class="nav-item">
                        <div class="nav_logout">
                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                @csrf
                                <input type="submit" class="btn_logout" value="ログアウト">
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
    </header>
    @yield('content')
    <footer class="site_footer">
        <p>CopyLight TypingRPG 2021</p>
    </footer>
</body>
</html>
