<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employment extends Model
{
    protected $fillable =[
        'name', 'email','phone','cel', 'linkedin','attachment'
    ];
    
}
