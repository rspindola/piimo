<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable =['area','name', 'email','phone','message','development','unity','isClient','area'];
}
