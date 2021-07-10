<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')</title>
    <link rel="shortcut icon" href="{{ asset('/images/favicon/favicon.ico') }}">

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/edit.js') }}" defer></script>

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
                <img src="{{ asset('/images/system_images/logo2w150.png') }}" alt="">
            </a>
        </div>
        <div class="site_header_end">
            <ul class="navbar_right">
                <li class="nav-item">
                    <div class="nav_logout">
                        <form id="logout-form" action="{{ route('logout') }}" method="POST">
                            @csrf
                            <input type="submit" class="btn_logout" value="ログアウト">
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    </header>
    @yield('content')
    <footer class="site_footer">
        <p>CopyLight TypingRPG 2021</p>
    </footer>
</body>
</html>
