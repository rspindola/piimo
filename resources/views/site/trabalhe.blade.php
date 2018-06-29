@extends('vendor.piimo.msster')
@section('css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.24.1/sweetalert2.min.css" />
<style>
    .help-block-danger{
        color:red;
        font-size: 0.75rem;
    }
    .has-error{
        border: 1px solid red !important;
    }
</style>
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Trabalhe Conosco</h1>
            </div>
        </div>
    </div>
</section>
<main id="trabalhe-piimo">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <p class="h2 text-uppercase">Junte-se a nós</p>
                <p class="small text-justify">Buscamos profissionais dinâmicos, com capacidade para vencer desafios, que saibam lidar com questões diversas de forma construtiva e, sobretudo, que tenham comprometimento, postura ética e respeito em suas relações.</p>
                <p class="small text-justify">Se você se identifica com nossa proposta e tem interesse em fazer parte da nossa equipe, cadastre seu currículo.</p>
                <div class="form-div">
                    <form id="" class="form-vertical" method="post" action="/trabalhe/envia" enctype="multipart/form-data">
                    {{ csrf_field() }}
                        <div class="row">
                            <div class="col-md-12">
                                <label for="nome">Nome:</label> 
                                <input type="text" name="name" class="form-control {{ $errors->has('name') ? 'has-error' : '' }}" placeholder="Digite seu nome">
                                @if ($errors->has('name'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="email">Email:</label> 
                                <input type="text" name="email" class="form-control {{ $errors->has('email') ? 'has-error' : '' }}" placeholder="Digite seu e-mail">
                                @if ($errors->has('email'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 pr-md-1">
                                <label for="telefone">Telefone (fixo):</label> <input type="tel" name="phone" class="form-control {{ $errors->has('phone') ? 'has-error' : '' }}" placeholder="Digite seu telefone">
                                @if ($errors->has('phone'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('phone') }}</strong>
                                    </span>
                                @endif
                            </div>
                            <div class="col-md-6 pl-md-1">
                                <label for="telefone-celular">Telefone (celular):</label> <input type="tel" name="cel" class="form-control {{ $errors->has('cel') ? 'has-error' : '' }}" placeholder="Digite seu telefone">
                                @if ($errors->has('cel'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('cel') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="curriculo" class="btn btn-success">Anexo:</label> 
                                <input class="form-control {{ $errors->has('attachment') ? 'has-error' : '' }}" id="attachment" type="file" <input type="file" name="foo" accept="application/msword,text/plain, application/pdf" name="attachment">
                                @if ($errors->has('attachment'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('attachment') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <label for="linkedin">Linkedin:</label> <input type="text" name="linkedin" class="form-control {{ $errors->has('linkedin') ? 'has-error' : '' }}" placeholder="Digite seu perfil no LinkedIn">
                                @if ($errors->has('linkedin'))
                                    <span class="help-block-danger">
                                        <strong>{{ $errors->first('linkedin') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar currículo</button>
                        <div class="col-md-12"><img class="loader hidden" src="{{asset('images/ajax-loader.gif')}}" alt="" srcset=""></div>
                    </form>
                </div>
            </div>
            <div class="offset-md-1 col-md-5"><img src="{{asset('vendor/piimo/site/img/trabalhe/piimo_trabalhe-conosco.jpg') }}" alt="" class="img-fluid"></div>
        </div>
    </div>
</main>
@stop
@section('js')
<script src="{{asset('js/geolocator.min.js')}}"></script>
<script src="{{asset('js/getGeo.js')}}"></script>
<script src="{{asset('js/js.cookie.min.js') }}"></script>
<script src="{{asset('js/jquery.mask.min.js')}}"></script>
<script src="{{asset('js/jquery.validate.js')}}"></script>
<script src="{{asset('js/js.cookie.min.js')}}"></script>
<script src="{{asset('js/envia.js')}}"></script>
<script src="{{asset('vendor/sweetalert2/dist/sweetalert2.all.min.js')}}"></script>
<script src="{{asset('vendor/sweetalert2/dist/sweetalert2.min.js')}}"></script>
@stop