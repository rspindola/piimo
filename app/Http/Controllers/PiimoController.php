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
        $imagens_empreendimento = Image::where('development_id', $empreendimento['id'])->get();
        $imagens_plantas = Image::where('development_id',$empreendimento['id'])->get();
        $obra = Building::find($empreendimento['id']);
        return view('site.show_empreendimento')
            ->with('empreendimento', $empreendimento)
            ->with('imagens_plantas', $imagens_plantas)
            ->with('obra', $obra)
            ->with('imagens_empreendimento', $imagens_empreendimento);

        SEOMeta::setTitle('Publciacao - '.$publicacao->titulo);
        SEOMeta::setDescription('Conteudo sobre o destaque '.$publicacao->destaque);
        SEOMeta::addMeta('article:published_time', $publicacao->created_at->toW3CString(), 'property');
        SEOMeta::addMeta('article:section', $publicacao->categoria->nome, 'property');

        OpenGraph::setDescription('Conteudo sobre o destaque '.$publicacao->destaque);
        OpenGraph::setTitle('Publciacao - '.$publicacao->titulo);
        OpenGraph::setUrl('http://blog.bomcambio.com.br/'.$publicacao->slug);
        OpenGraph::addProperty('type', 'article');
        OpenGraph::addProperty('locale', 'pt-br');

        OpenGraph::addImage($publicacao->imagem);
        OpenGraph::addImage(['url' => 'http://blog.bomcambio.com.br/images/posts/'.$publicacao->imagem, 'size' => 300]);
        OpenGraph::addImage('http://blog.bomcambio.com.br/images/posts/'.$publicacao->imagem, ['height' => 300, 'width' => 300]);

        Twitter::setSite('@BomCambio');       
        return view('blog.show')->with('publicacao', $publicacao);
    }

    public function empreendimentos()
    {
        return view('site.empreendimentos')->with('developments', Development::all());
    }
}
