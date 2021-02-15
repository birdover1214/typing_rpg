<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@index')->name('home');

Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');

Route::group(['middleware' => 'auth'], function() {

    Route::post('/getdata', 'GameController@getData');

    Route::post('/setdata', 'GameController@setData');

    Route::post('/getitem', 'GameController@getItem');

    Route::post('/setitem', 'GameController@setItem');

    Route::get('/userinfo', 'UserController@showInfo')->name('userInfo');

    Route::post('/userinfo', 'UserController@editInfo')->name('userEdit');

    Route::post('/delete', 'UserController@delete')->name('userDelete');
});
