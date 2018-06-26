<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Development;

class Image extends Model
{
    protected $fillable = ['development_id', 'nome','category'];

    public function user()
    {
        return $this->hasMany(Development::class);
    }
}
