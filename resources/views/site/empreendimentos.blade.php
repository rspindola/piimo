@extends('vendor.piimo.msster')
@section('css')
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Empreendimentos</h1>
            </div>
        </div>
    </div>
</section>
<main>
    <div class="container">
        <div id="filtro" class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Selecione o status da obra ou bairro: <img src="{{asset('vendor/piimo/site/img/empreendimentos/icon-filter.svg') }}" class="icon-filtro d-none d-md-block" alt=""></div>
                    <div class="card-body">
                        <ul class="filtro-obras menu-filtro" data-filter-group="status">
                            <li><a href="javascript:void(0)" class="todos filtro-selecionado" data-filter="*">Todos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".LANÇAMENTO">Lançamentos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".OBRAS">Em Obras</a></li>
                            <li><a href="javascript:void(0)" data-filter=".PRONTO">Prontos</a></li>
                        </ul>
                        <hr>
                        <ul class="filtro-bairros menu-filtro" data-filter-group="bairro">
                            <li><a href="javascript:void(0)" class="todos filtro-selecionado" data-filter="*">Todos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".recreio">Recreio</a></li>
                            <li><a href="javascript:void(0)" data-filter=".botafogo">Botafogo</a></li>
                            <li><a href="javascript:void(0)" data-filter=".flamengo">Flamengo</a></li>
                            <li><a href="javascript:void(0)" data-filter=".ipanema">Ipanema</a></li>
                            <li><a href="javascript:void(0)" data-filter=".lagoa">Lagoa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="card-empreendimentos" class="row filtro-emp">
            @foreach($developments as $development)
            <div class="col-md-3 {{$development->status}} {{strtolower($development->neighborhood)}}">
                <div class="card">
                    <a href="{{route('empreendimento.site.show', [$development->slug])}}">
                        <div class="card-header text-uppercase">{{$development->status}}</div>
                        <div class="card-body"><img src="{{ asset('images/features/'.$development->img_featured)}}" alt="{{$development->name}} - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">{{$development->name}}</strong><br>{{$development->street}} - {{$development->neighborhood}}</div>
                    </a>
                </div>
            </div>
            @endforeach            
        </div>
    </div>
</main>


@stop
@section('js')
@stop