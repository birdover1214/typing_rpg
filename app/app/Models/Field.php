<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Field extends Model
{
    protected $guarded = [
        'id'
    ];

    //リレーション
    public function monsters() {
        return $this->hasMany('App\Models\Monster');
    }

    public function questions() {
        return $this->hasMany('App\Models\Question');
    }
}
