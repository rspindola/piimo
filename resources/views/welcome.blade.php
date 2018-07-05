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
@stop
@section('content')
<header>
    <div class="container-fluid m-0 p-0">
        <div class="col-md-12 m-0 p-0">
            <div class="slider-home">
                <img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/slider/homer-slider-01.jpg') }}" alt="Residencial Payssandu" style="width:100%">
                <img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/slider/homer-slider-02.jpg') }}" alt="Residencial Payssandu" style="width:100%">
                <img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/slider/homer-slider-03.jpg') }}" alt="Residencial Payssandu" style="width:100%">
            </div>
        </div>
    </div>
</header>
<section id="newsletter">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <p class="newsletter-title text-center"><strong class="text-uppercase">Inscreva-se</strong> e receba informações dos próximos lançamentos.</p>
            </div>
            <div class="col-md-7 p-md-0 d-flex">
                <form id="news-form" class="form-inline w-100" method="post" action="">
                    <div class="col-6 col-md-4 pr-0 p-md-0">
                        <input type="text" id="name-news" name="name-news" class="form-control newsletter-form-text" placeholder="Digite seu nome">
                    </div>
                    <div class="col-6 col-md-4 pl-1 px-md-3">
                        <input type="email" id="email-news" name="email-news" class="form-control newsletter-form-email" placeholder="Digite seu e-mail">
                    </div>
                    <div class="col-md-4 p-md-0">
                        <button type="submit" class="btn btn-success btn-block rounded-0 text-uppercase">Quero receber</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<main id="main-home">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="img-wrapper mb-3"><a href="{{url('/empreendimento')}}#filtro=.LANÇAMENTO"><img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/home-lancamento.jpg')}}" alt="Lançamento"><div class="badge badge-secondary"><i class="icon-eye"></i> Veja Mais</div></a></div>
                <a href="{{url('/empreendimento')}}#filtro=.LANÇAMENTO">
                    <p class="h2 text-uppercase emp-home-title">Lançamentos</p>
                </a>
                <p class="text-justify emp-home-descricao">A Piimo atua no mercado imobiliário com os melhores projetos em localizações de alto valor no Rio de Janeiro.</p>
            </div>
            <div class="col-12 col-md-4">
                <div class="img-wrapper mb-3"><a href="{{url('/empreendimento')}}#filtro=.OBRAS"><img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/home-em-obras.jpg')}}" alt="Em Obras"><div class="badge badge-secondary"><i class="icon-eye"></i> Veja Mais</div></a></div>
                <a href="empreendimentos.php#filtro=.obras">
                    <p class="h2 text-uppercase emp-home-title">Em Obras</p>
                </a>
                <p class="text-justify emp-home-descricao">Todas as parcerias construídas ao longo desses anos são baseadas em ética e foco na agilidade das decisões.</p>
            </div>
            <div class="col-12 col-md-4">
                <div class="img-wrapper mb-3"><a href="{{url('/empreendimento')}}#filtro=.PRONTO"><img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/home-prontos.jpg') }}" alt="Prontos"><div class="badge badge-secondary"><i class="icon-eye"></i> Veja Mais</div></a></div>
                <a href="empreendimentos.php#filtro=.pronto">
                    <p class="h2 text-uppercase emp-home-title">Prontos</p>
                </a>
                <p class="text-justify emp-home-descricao">A Piimo busca transformar as melhores oportunidades de negócios em produtos de alto valor.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="img-wrapper mb-3"><a href="{{url('/sobre')}}"><img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/home-sobre-a-piimo.jpg')}}" alt="Em Obras"><div class="badge badge-secondary"><i class="icon-eye"></i> Veja Mais</div></a></div>
                <a href="piimo.php">
                    <p class="h2 text-uppercase emp-home-title">Sobre a Piimo</p>
                </a>
                <p class="text-justify emp-home-descricao">A Piimo é uma empresa que nasceu com mais de 20 anos de experiência de seus executivos atuando no mercado imobiliário em projetos residenciais e comerciais em diversas cidades do estado do Rio de Janeiro.</p>
            </div>
            <div class="col-12 col-md-6">
                <div class="img-wrapper mb-3"><a href="{{url('/obra')}}"><img class="img-fluid" src="{{asset('vendor/piimo/site/img/home/home-obras-por-administracao.jpg') }}" alt="Prontos"><div class="badge badge-secondary"><i class="icon-eye"></i> Veja Mais</div></a></div>
                <a href="obra.php">
                    <p class="h2 text-uppercase emp-home-title">Obras por Administração</p>
                </a>
                <p class="text-justify emp-home-descricao">A obra por administração, também chamada de “obra a preço de custo”, é o modelo de construção em que os proprietários das unidades são os donos do empreendimento, sendo a construtora responsável pela administração do mesmo.</p>
            </div>
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