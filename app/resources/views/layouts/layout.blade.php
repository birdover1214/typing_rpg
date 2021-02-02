<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

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
                        <button id="change_equipment_btn">装備の変更</button>
                    </li>
                    <li class="nav_middle_item">
                        <button id="restart_btn">バトルのリセット</button>
                    </li>
                    <li class="nav_middle_item">
                        <button id="change_field_btn">フィールドの変更</button>
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
    <div id="app">
        <main class="site_main">
            @yield('content')
        </main>
    </div>
    <footer class="site_footer">
        <p>CopyLight TypingRPG 2021</p>
    </footer>
</body>
</html>
