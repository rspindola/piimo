<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;

class Development extends Model
{
    use Sluggable;
    
    protected $fillable = ['id','name', 'slug','logo','img_featured', 'name', 'street', 'number', 'neighborhood', 'city', 'country', 'zipcode', 'rooms', 'footage', 'description', 'status', 'lat', 'lng','apartamento'];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => ['neighborhood', 'name']
            ]
        ];
    }

    public function image()
    {
        return $this->belongsTo(Image::class);
    }
}
