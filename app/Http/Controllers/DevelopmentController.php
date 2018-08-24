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
        if ($request->logo) {
            $logo = $request->logo;
            $filename = 'planta-'.str_random(10).time().'.'.$logo->getClientOriginalExtension(); 
			$destinationPath = public_path('images/logos');
            $original = ImageI::make($logo->getRealPath())->resize(270, 176);
            $original->save($destinationPath.'/'.$filename);
            $dados['logo'] = $filename;
        }

        if($request->img_featured) {
            $img_featured = $request->img_featured;
            $filename = 'planta-'.str_random(10).time().'.'.$img_featured->getClientOriginalExtension(); 
			$destinationPath = public_path('images/features');
            $original = ImageI::make($img_featured->getRealPath())->resize(460, 549);
            $original->save($destinationPath.'/'.$filename);
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
        if ($request->date_obra){
            $date_obra = $request->date_obra.'-01';
        }else{
            $date_obra = null;
        }
        if ($dados['status']=='OBRAS') {
            if ($request->photos_obra) {
                foreach ($request->photos_obra as $photos_obra) {
                    $filename = 'obra-'.str_random(10).time().'.'.$photos_obra->getClientOriginalExtension(); 
                    $destinationPath = public_path('images/empreendimentos/thumb');
                    $thumb_img = ImageI::make($photos_obra->getRealPath())->resize(795, 550);
                    $thumb_img->save($destinationPath.'/'.$filename,80);
                    
                    $destinationPath = public_path('images/empreendimentos');
                    $original = ImageI::make($photos_obra->getRealPath());
                    $original->save($destinationPath.'/'.$filename);
                    Image::create([
                        'development_id' => $empreendimento->id,
                        'nome' => $filename,
                        'category' => 'OBRA',
            		'date' => $date_obra
                    ]);
                }
            }
        }
        //salvando imagens do empreendimento
        if ($request->photos) {
            foreach ($request->photos as $photo) {
                $filename = 'empreendimento-'.str_random(10).time().'.'.$photo->getClientOriginalExtension(); 
                $destinationPath = public_path('images/empreendimentos/thumb');
                $thumb_img = ImageI::make($photo->getRealPath())->resize(795, 550);
                $thumb_img->save($destinationPath.'/'.$filename,80);
                
                $destinationPath = public_path('images/empreendimentos');
                $original = ImageI::make($photo->getRealPath());
                $original->save($destinationPath.'/'.$filename);
                
                Image::create([
                    'development_id' => $empreendimento->id,
                    'nome' => $filename,
                    'category' => 'FOTO'
                ]);
            }
        }

        //salvando as fotos da planta do empreendimento
        if ($request->photos_planta) {
            foreach ($request->photos_planta as $photo_planta) {
                $filename = 'planta-'.str_random(10).time().'.'.$photo_planta->getClientOriginalExtension(); 
                $destinationPath = public_path('images/empreendimentos/thumb');
                $thumb_img = ImageI::make($photo_planta->getRealPath())->resize(795, 550);
                $thumb_img->save($destinationPath.'/'.$filename,80);
                $destinationPath = public_path('images/empreendimentos');
                $original = ImageI::make($photo_planta->getRealPath());
                $original->save($destinationPath.'/'.$filename);
                Image::create([
                    'development_id' => $empreendimento->id,
                    'nome' => $filename,
                    'category' => 'PLANTA'
                ]);
            }
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
        $obra = Building::where('development_id', $id)->first();
        return view('admin.development.edit')->with('empreendimento', Development::find($id))->with('obra',$obra);
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
        $obra = Building::where('development_id', $id)->first();

        //requisição dos dados do formulario
        $dados = request()->except('_token');
        
        //pegando e manipulando os dados da logo
        if ($request->logo) {
            $logo = $request->logo;
            $filename = 'planta-'.str_random(10).time().'.'.$logo->getClientOriginalExtension(); 
			$destinationPath = public_path('images/logos');
            $original = ImageI::make($logo->getRealPath())->resize(270, 176);
            $original->save($destinationPath.'/'.$filename);
            $dados['logo'] = $filename;
        }

        if($request->img_featured) {
            $img_featured = $request->img_featured;
            $filename = 'planta-'.str_random(10).time().'.'.$img_featured->getClientOriginalExtension(); 
			$destinationPath = public_path('images/features');
            $original = ImageI::make($img_featured->getRealPath())->resize(460, 549);
            $original->save($destinationPath.'/'.$filename);
            $dados['img_featured'] = $filename;
        }

        //salvando empreendimento no banco
        $obra->update($dados);
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
