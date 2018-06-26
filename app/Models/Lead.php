<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    protected $fillable = ['area','name','email','phone','message','city','neighborhood','utm_source','utm_medium','utm_campaign'];
}
