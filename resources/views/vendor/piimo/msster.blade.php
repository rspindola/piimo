<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Piimo - Empreendimentos Imobiliários</title>

    <style>
        .loader{display:block;margin:0 auto;}
        .hidden{display:none !important;}
         @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-Thin.woff2') format('woff2');
            font-weight: 100;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-SemiBold.woff2') format('woff2');
            font-weight: 600;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-ExtraLight.woff2') format('woff2');
            font-weight: 200;
            font-style: normal;
        }

        @font-face {
            font-family: 'Poppins';
            src: url('/vendor/piimo/site/css/fonts/Poppins-Medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
        }

        img {
            height: auto !important;
        }

    </style>

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('vendor/piimo/site/css/frameworks.css') }}">
    <link rel="stylesheet" href="{{asset('vendor/piimo/site/css/style.css') }}">
    @yield('css')
</head>

<body>
    <section id="top">
        <div class="container">
            <div class="row">
                <div class="col-md-12 d-flex">
                    <a href="#" target="_blank" class="ml-auto"><i class="icon-facebook"></i></a>
                </div>
            </div>
        </div>
    </section>
    <nav class="navbar-dark">
        <div class="container">
            <div class="row">
                <div class="col-md-2 logo-div">
                    <a href="{{url('/')}}">
                        <img src="{{asset('vendor/piimo/site/img/piimo-logo.svg') }}" alt="Piimo - Empreendimentos Imobiliários" class="img-fluid"> 
                    </a>
                    <button class="btn btn-primary btn-collapse ml-auto d-md-none" data-toggle="collapse" data-target="#collapseMenu">
                        <i class="icon-align-justify"></i>
                    </button>
                </div>
                <div class="col-md-8 menu-list d-flex justify-content-center align-items-center">
                    <ul class="list-inline collapse d-md-block" id="collapseMenu">
                        <li class="list-inline-item">
                            <a class="nav-link" href="{{url('/empreendimento')}}">Empreendimentos</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link" href="{{url('/obra')}}">Obra por Administração</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" aria-haspopup="true" aria-expanded="false">A Piimo</a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="{{url('/sobre')}}">Institucional</a>
                                <a class="dropdown-item" href="{{url('/venda-seu-terreno')}}">Apresente seu terreno</a>
                                <a class="dropdown-item" href="{{url('/trabalho')}}">Trabalhe Conosco</a>
                            </div>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link" href="{{url('contato')}}">Fale Conosco</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-2 nav-side text-center">
                    <i class="icon-phone"></i>
                    <p><small>(21)</small>2557-7730</p>
                </div>
            </div>
        </div>
    </nav>
    <div id="barra-contato">
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-0">
                    <ul class="text-center">
                        <li>
                            <a href="#" data-toggle="modal" data-target="#modalNav_AtendimentoEmail"><i class="icon-envelope"></i> <strong>Atendimento por E-mail</strong></a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalNav_Ligamos"><i class="icon-phone"></i> <strong>Ligamos para você</strong></a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalNav_Whatsapp"><i class="icon-whatsapp"></i> <strong>Atendimento via Whatsapp</strong></a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modalNav_VendasOnline"><i class="icon-headphones"></i> <strong>Vendas Online</strong></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalNav_AtendimentoEmail" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                <div class="modal-body">
                    <form id="form-contato" class="email form-vertical" method="post" action="">
                        <div class="row">
                            <div class="col-md-12"><label for="nome">Nome:</label> <input type="text" name="nome" class="form-control" placeholder="Digite seu nome"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="email">Email:</label> <input type="text" name="email" class="form-control" placeholder="Digite seu e-mail"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="telefone">Telefone:</label> <input type="text" name="telefone" class="phonemask form-control" placeholder="Digite seu telefone"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="nome">Mensagem:</label> <textarea type="text" name="mensagem" class="form-control" rows="4" placeholder="Escreva sua mensagem"></textarea></div>
                        </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button></form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalNav_Ligamos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                <div class="modal-body">
                    <form id="form-contato" class="ligamos form-vertical" method="post" action="">
                        <div class="row">
                            <div class="col-md-12"><label for="nome">Nome:</label> <input type="text" name="nome-liga" class="form-control" placeholder="Digite seu nome"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="telefone">Telefone:</label> <input type="phone" name="telefone-liga" class="phonemask form-control" placeholder="Digite seu telefone"></div>
                        </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button></form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalNav_Whatsapp" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
                <div class="modal-body">
                    <form id="modalNav_Whatsapp" class="whatsapp form-vertical" method="post" action="">
                        <div class="row">
                        <div class="col-md-12"><label for="nome">Nome:</label> <input type="text" name="nome-wpp" class="form-control" placeholder="Digite seu nome"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="telefone">Whatsapp:</label> <input type="phone" name="telefone-wpp" class="phonemask form-control" placeholder="Digite seu telefone"></div>
                        </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button></form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalNav_VendasOnline" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hiden="true">&times;</span></button></div>
                <div class="modal-body">
                    <p class="h2 text-center">Ligue Agora: <a href="tel://2125577730">(21) 2557-7730</a></p>
                </div>
            </div>
        </div>
    </div>

    @yield('content')

    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-institucional"><img src="{{asset('vendor/piimo/site/img/piimo-logo.svg') }}" alt="Piimo - Empreendimentos Imobiliários" class="img-fluid logo-footer"><br><br>
                    <p class="text-justify">A Piimo é uma incorporadora e construtora focada em empreendimentos na Zona Sul do Rio de Janeiro. Já desenvolvemos condomínios de alto padrão em Ipanema, Lagoa, Botafogo e Flamengo. Somos focados na qualidade da construção e em produtos com alto valor agregado. Valorizamos o atendimento personalizado aos nossos clientes e temos orgulho de entregar todas as nossas obras no prazo.</p><a href="#" target="_blank" class="ml-auto"><i class="icon-facebook"></i></a></div>
                <div class="col-md-5 footer-section footer-section-contato">
                    <p class="h3 footer-section-title">Entre em contato</p><br>
                    <ul class="list-unstyled">
                        <li><i class="icon-phone"></i> 21 2557-7730</li>
                        <li><i class="icon-envelope"></i> contato@piimo.com.br</li>
                        <li><i class="icon-map-marker"></i> Largo do Machado, 21 Grupo 503<br>Rio de Janeiro/RJ - CEP 22221-020</li>
                        <li><i class="icon-microphone"></i>Assessoria de Imprensa - TM Comunicações
                            <ul>
                                <li>Fernanda Malcher<br>fernanda@tmcomunicacoes.com.br</li>
                                <li>Caroline Romero<br>caroline@tmcomunicacoes.com.br</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 footer-section footer-section-empresa">
                    <p class="h3 footer-section-title">A Empresa</p><br>
                    <ul class="list-unstyled">
                        <li><i class="icon-caret-right"></i> <a href="{{url('/sobre')}}">A Piimo</a></li>
                        <li><i class="icon-caret-right"></i> <a href="{{url('/venda-seu-terreno')}}">Apresente seu terreno</a></li>
                        <li><i class="icon-caret-right"></i> <a href="{{url('/trabalho')}}">Trabalhe na Piimo</a></li>
                        <li><i class="icon-caret-right"></i> <a href="{{url('/obra')}}">Obra por administração</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js" integrity="sha256-0rguYS0qgS6L4qVzANq4kjxPLtvnp5nn2nB5G1lWRv4=" crossorigin="anonymous"></script>
    <script src="{{asset('vendor/piimo/site/js/frameworks.js') }}"></script>
    <script src="{{asset('vendor/piimo/site/js/libs.js') }}"></script>
    <script src="{{asset('js/geolocator.min.js')}}"></script>
    <script src="{{asset('js/getGeo.js')}}"></script>
    <script src="{{asset('js/js.cookie.min.js') }}"></script>
    <script src="{{asset('js/jquery.mask.min.js')}}"></script>
    <script src="{{asset('js/jquery.validate.js')}}"></script>
    <script src="{{asset('js/js.cookie.min.js')}}"></script>
    <script src="{{asset('js/envia.js')}}"></script>
    <script src="{{asset('vendor/sweetalert2/dist/sweetalert2.all.min.js')}}"></script>
    <script src="{{asset('vendor/sweetalert2/dist/sweetalert2.min.js')}}"></script>
    @yield('js')
    <!-- Include this after the sweet alert js file -->
    @include('sweet::alert')
</body>

</html>
