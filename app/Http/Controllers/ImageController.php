<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use ImageI;

class ImageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request,$id)
    {
        $photo = $request->file('file');
        $filename = 'empreendimento-'.str_random(10).time().'.'.$photo->getClientOriginalExtension(); 
        $destinationPath = public_path('images/empreendimentos');
        $thumb_img = ImageI::make($photo->getRealPath())->resize(795, 550);
        $thumb_img->save($destinationPath.'/'.$filename,80);
        if ($request->date)
        {
            $date = $request->date.'-01';
        }else{
            $date = null;
        }
        Image::create([
            'development_id' => $id,
            'nome' => $filename,
            'category' => $request->category,
            'date' => $date
        ]);
    
        return response()->json(['success'=>$filename]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $imagens_emprendimento = Image::where('development_id', $id)->where('category', 'FOTO')->get();
        $imagens_obra = Image::where('development_id', $id)->where('category', 'OBRA')->get();
        $imagens_planta = Image::where('development_id', $id)->where('category', 'PLANTA')->get();
        return view('admin.images.edit')
            ->with('id', $id)
            ->with('imagens_obra', $imagens_obra)
            ->with('imagens_planta', $imagens_planta)
            ->with('imagens_emprendimento', $imagens_emprendimento);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $image = Image::findOrFail($id);
        $image->delete();
        return response()->json($image);
    }
}
