const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/assets/sass/app.scss', '../resources/assets/build/css/')

    .styles(
        [
            'resources/assets/build/css/app.css',
        ],
        'public/css/app.css'
    )

    .js(
        [
            'resources/assets/js/app.js',
        ],
        'public/js/app.js'
    )

    .js(
        [
            'resources/assets/js/main.js',
        ],
        'public/js/main.js'
    )

    .js(
        [
            'resources/assets/js/edit.js',
        ],
        'public/js/edit.js'
    )

    .sourceMaps()
    .js('node_modules/popper.js/dist/popper.js', 'public/js').sourceMaps();