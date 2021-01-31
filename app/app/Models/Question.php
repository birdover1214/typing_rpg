<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $guarded = [
        'id'
    ];

    //リレーション
    public function field() {
        return $this->belongsTo('App\Models\Field');
    }
}
