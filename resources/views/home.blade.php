@extends('adminlte::page')

@section('title', 'Admin | Home')

@section('content_header')
    <h1>Dashboard</h1>
@stop

@section('content')
<div class="row">
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-aqua">
            <div class="inner">
              <h3>{{count(App\Models\Lead::all())}}</h3>

              <p>Leads</p>
            </div>
            <div class="icon">
              <i class="fa fa-file"></i>
            </div>
            <a href="{{route('leads.index')}}" class="small-box-footer">Veja mais <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-green">
            <div class="inner">
              <h3>{{count(App\Models\Development::all())}}</h3>

              <p>Empreendimentos</p>
            </div>
            <div class="icon">
              <i class="fa fa-building"></i>
            </div>
            <a href="{{route('empreendimentos.index')}}" class="small-box-footer">Veja mais <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-yellow">
            <div class="inner">
              <h3>{{count(App\Models\Contact::all())}}</h3>

              <p>Contatos</p>
            </div>
            <div class="icon">
              <i class="fa fa-envelope-o"></i>
            </div>
            <a href="{{route('contatos.index')}}" class="small-box-footer">Veja mais <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-xs-6">
          <!-- small box -->
          <div class="small-box bg-red">
            <div class="inner">
              <h3>{{count(App\Models\Employment::all())}}</h3>

              <p>Curriculos</p>
            </div>
            <div class="icon">
              <i class="fa fa-file-text-o"></i>
            </div>
            <a href="{{route('curriculos.index')}}" class="small-box-footer">Veja mais <i class="fa fa-arrow-circle-right"></i></a>
          </div>
        </div>
        <!-- ./col -->
      </div>
@stop