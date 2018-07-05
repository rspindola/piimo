<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Newsletter extends Model
{
    protected $fillable = ['name','email','utm_source','utm_medium','utm_campaign'];
}
