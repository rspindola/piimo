@extends('vendor.piimo.msster')
@section('css')
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.24.1/sweetalert2.min.css" />
@stop
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Obra por Administração</h1>
            </div>
        </div>
    </div>
</section>
<main id="obra-piimo">
    <div class="container">
        <div class="row">
            <div class="col-md-5"><img src="{{asset('vendor/piimo/site/img/obra/piimo-obra-por-administracao.png') }}" alt="" class="img-fluid"></div>
            <div class="col-md-7">
                <p>A obra por administração, também chamada de “obra a preço de custo”, é o modelo de construção em que os proprietários das unidades são os donos do empreendimento, sendo a construtora responsável pela administração do mesmo. Neste modelo, será definida uma taxa de administração a ser cobrada pela construtora sobre o orçamento preliminar da construção.</p>
                <p>A transparência é a grande vantagem do modelo de obra por administração. Os proprietários, como donos do negócio, possuem acesso a todas as informações dos empreendimentos durante as assembleias periódicas e, para dar ainda mais segurança, podem contratar em paralelo uma auditoria externa para acompanhar o andamento da obra.</p>
                <p>Uma outra grande vantagem deste modelo é a flexibilidade na personalização das unidades. O projeto pode ser modificado, seguindo normas técnicas da construtora, de forma a se adaptar de maneira exclusiva as necessidades de cada cliente.</p><br><br>
                <p class="h4 text-center text-uppercase">Saiba mais sobre Obra por administração:</p>
                <div class="text-center"><a href="#" class="btn btn-success btn-lg" role="button" data-toggle="modal" data-target="#modalObra">Quero um atendimento exclusivo</a></div>
            </div>
        </div>
    </div>
</main>
<div class="modal fade" id="modalObra" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>
            <div class="modal-body">
                <p class="h3 text-center">Deixe seus dados que, em breve, entraremos em contato.</p>
                <form id="form-obra" class="form-vertical" method="post" action=""><label for="nome">Nome:</label> <input type="text" name="name-obra" class="form-control" placeholder="Digite seu nome"> <label for="telefone">Telefone:</label> <input type="text" name="phone-obra" class="form-control" placeholder="Digite seu telefone"> <button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button><div class="col-md-12"><img class="loader hidden" src="{{asset('images/ajax-loader.gif')}}" alt="" srcset=""></div></form>
            </div>
        </div>
    </div>
</div>
@stop
@section('js')
@stop