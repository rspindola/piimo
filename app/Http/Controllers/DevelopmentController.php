<?php

namespace App\Http\Controllers;

use App\Models\Development;
use Illuminate\Http\Request;
use App\Models\Image;
use App\Models\Building;
use ImageI;
use App\Http\Requests\DevelopmentCreateRequest;
use App\Http\Requests\DevelopmentUpdateRequest;

class DevelopmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.development.index')->with('developments', Development::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.development.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DevelopmentCreateRequest $request)
    {
        //requisição dos dados do formulario
        $dados = request()->except('_token');
        
        //pegando e manipulando os dados da logo
        if ($request->hasFile('logo'))
        {
            $filename = $request->file('logo')->store('logos');
            $dados['logo'] = $filename;
        }

        if ($request->hasFile('img_featured'))
        {
            $filename = $request->file('img_featured')->store('features');
            $dados['img_featured'] = $filename;
        }

        
        $empreendimento=Development::create($dados);
        //salvando obra no banco
        $obra= new Building([
            'development_id' => $empreendimento->id,
            'terreno' => $request->terreno,
            'fundacao' => $request->fundacao,  
            'estrutura' => $request->estrutura,  
            'alvenaria' => $request->alvenaria,  
            'instalacao' => $request->instalacao,  
            'revestimento' => $request->revestimento,  
            'acabamento' => $request->acabamento,  
            'entrega' => $request->entrega
        ]);

        $obra->save();
        if ($dados['status']=='OBRAS') {
            foreach ($request->photos_obra as $photos_obra) {
                $filename = 'obra-'.str_random(10).time().'.'.$photos_obra->getClientOriginalExtension(); 
                $destinationPath = public_path('images/empreendimentos');
                $thumb_img = ImageI::make($photos_obra->getRealPath())->resize(795, 550);
                $thumb_img->save($destinationPath.'/'.$filename,80);
                Image::create([
                    'development_id' => $empreendimento->id,
                    'nome' => $filename,
                    'category' => 'OBRA'
                ]);
            }
        }
        //salvando imagens do empreendimento
        foreach ($request->photos as $photo) {
            $filename = 'empreendimento-'.str_random(10).time().'.'.$photo->getClientOriginalExtension(); 
            $destinationPath = public_path('images/empreendimentos');
            $thumb_img = ImageI::make($photo->getRealPath())->resize(795, 550);
            $thumb_img->save($destinationPath.'/'.$filename,80);
            Image::create([
                'development_id' => $empreendimento->id,
                'nome' => $filename,
                'category' => 'FOTO'
            ]);
        }

        //salvando as fotos da planta do empreendimento
        foreach ($request->photos_planta as $photo_planta) {
            $filename = 'planta-'.str_random(10).time().'.'.$photo_planta->getClientOriginalExtension(); 
            $destinationPath = public_path('images/empreendimentos');
            $thumb_img = ImageI::make($photo_planta->getRealPath())->resize(795, 550);
            $thumb_img->save($destinationPath.'/'.$filename,80);
            Image::create([
                'development_id' => $empreendimento->id,
                'nome' => $filename,
                'category' => 'PLANTA'
            ]);
        }
        alert()->success('Empreendimento cadastrado com sucesso!', 'Sucesso');
        return redirect()->route('empreendimentos.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Development  $development
     * @return \Illuminate\Http\Response
     */

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Development  $development
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('admin.development.edit')->with('empreendimento', Development::find($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Development  $development
     * @return \Illuminate\Http\Response
     */
    public function update(DevelopmentUpdateRequest $request, $id)
    {
        $development = Development::findOrFail($id);

        //requisição dos dados do formulario
        $dados = request()->except('_token');
        
        //pegando e manipulando os dados da logo
        if ($request->hasFile('logo'))
        {
            $filename = $request->file('logo')->store('logos');
            $dados['logo'] = $filename;
        }

        if ($request->hasFile('img_featured'))
        {
            $filename = $request->file('img_featured')->store('features');
            $dados['img_featured'] = $filename;
        }

        //salvando empreendimento no banco
        $development->update($dados);
        alert()->success('Empreendimento alterado com sucesso!','Sucesso.');
        return redirect()->route('empreendimentos.index');
    }

    /*
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Development  $development
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $development = Development::findOrFail($id);
        $development->delete();
        return response()->json($development);
    }
}
