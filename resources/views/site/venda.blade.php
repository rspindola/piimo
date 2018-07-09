@extends('vendor.piimo.msster')
@section('css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.24.1/sweetalert2.min.css" />
@stop
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Venda seu Terreno</h1>
            </div>
        </div>
    </div>
</section>
<main id="venda-piimo">
    <div class="container">
        <div class="row">
            <div class="col-md-6"><img src="{{asset('vendor/piimo/site/img/venda/piimo-venda.jpg') }}" alt="" class="img-fluid"><br><br>
                <p>A Piimo está permanentemente em busca de novas áreas para aquisição e novas oportunidades de negócios.</p>
                <p>Se você é proprietário de um terreno e deseja negociá-lo, ou se é um corretor e deseja nos oferecer uma área, por favor, preencha o cadastro abaixo e entraremos em contato.</p>
            </div>
            <div class="offset-md-1 col-md-5">
                <div class="form-div">
                    <p class="h1 form-title text-uppercase text-center">Apresente seu terreno</p>
                    <p class="small text-center">Se você é proprietário de um terreno e deseja negociá-lo ou se é um corretor e deseja nos oferecer uma área, por favor, preencha o cadastro abaixo e entraremos em contato.</p>
                    <form id="form-obra" class="form-vertical form-venda" method="post" action="">
                        <div class="row">
                            <div class="col-md-12"><label for="nome">Nome:</label> <input type="text" name="name-venda" class="form-control" placeholder="Digite seu nome"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 pr-md-1"><label for="email">Email:</label> <input type="text" name="email-venda" class="form-control" placeholder="Digite seu e-mail"></div>
                            <div class="col-md-6 pl-md-1"><label for="telefone">Telefone:</label> <input type="text" name="phone-venda" class="form-control" placeholder="Digite seu telefone"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 pr-md-1"><label for="city">Cidade:</label> <input type="text" name="city-venda" class="form-control" placeholder="Digite sua cidade"></div>
                            <div class="col-md-6 pl-md-1"><label for="telefone">Bairro:</label> <input type="text" name="neighborhood-venda" class="form-control" placeholder="Digite seu bairro"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-12"><label for="nome">Mensagem:</label> <textarea type="text" name="message-venda" class="form-control" rows="4" placeholder="Escreva sua mensagem"></textarea></div>
                        </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button>
                        <div class="col-md-12"><img class="loader hidden" src="{{asset('images/ajax-loader.gif')}}" alt="" srcset=""></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
@stop
@section('js')


@stop