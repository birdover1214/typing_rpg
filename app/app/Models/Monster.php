<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{
    protected $guarded = [
        'id',
    ];

    //リレーション
    public function field() {
        return $this->belongsTo('App\Models\Field');
    }

    public function item() {
        return $this->hasOne('App\Models\Item');
    }
}
