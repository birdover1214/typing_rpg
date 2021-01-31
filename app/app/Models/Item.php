<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    protected $guarded = [
        'id'
    ];

    //リレーション
    public function monster() {
        return $this->belongsTo('App\Models\Monster');
    }

    public function players() {
        return $this->belongsToMany('App\Models\Player');
    }
}
