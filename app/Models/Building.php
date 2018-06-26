<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Building extends Model
{
    protected $fillable =['terreno', 'fundacao', 'estrutura', 'alvenaria', 'instalacao', 'revestimento', 'acabamento', 'entrega'];
}
