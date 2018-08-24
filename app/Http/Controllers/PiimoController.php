<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Development;
use App\Models\Image;
use App\Models\Building;

class PiimoController extends Controller
{
    public function obra()
    {
        return view('site.obra');
    }

    public function instituicional()
    {
        return view('site.institucional');
    }

    public function venda()
    {
        return view('site.venda');  
    }

    public function trabalho()
    {
        return view('site.trabalhe');
    }

    public function contato()
    {
        return view('site.contato');
    }

    public function empreendimentosShow($slug)
    {
        $empreendimento = Development::whereSlug($slug)->firstOrFail();
        $imagens_emprendimento = Image::where('development_id', $empreendimento['id'])->where('category', 'FOTO')->orderBy('created_at', 'desc')->get();
        $imagens_obra = Image::where('development_id', $empreendimento['id'])->where('category', 'OBRA')->orderBy('created_at', 'desc')->get();
        $imagens_planta = Image::where('development_id', $empreendimento['id'])->where('category', 'PLANTA')->orderBy('created_at', 'desc')->get();
        $obra = Building::find($empreendimento['id']);
        return view('site.show_empreendimento')
            ->with('empreendimento', $empreendimento)
            ->with('obra', $obra)
            ->with('imagens_obra', $imagens_obra)
            ->with('imagens_planta', $imagens_planta)
            ->with('imagens_emprendimento', $imagens_emprendimento);
    }

    public function empreendimentos()
    {
        return view('site.empreendimentos')->with('developments', Development::all());
    }
}
