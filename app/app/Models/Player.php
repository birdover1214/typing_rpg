<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    protected $guarded = [
        'id'
    ];

    //リレーション
    public function user() {
        return $this->belongsTo('App\Models\User');
    }

    public function items() {
        return $this->belongsToMany('App\Models\Item');
    }
}
