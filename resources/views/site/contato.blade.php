@extends('vendor.piimo.msster')
@section('css')
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Fale Conosco</h1>
            </div>
        </div>
    </div>
</section>
<main>
    <section id="contato-piimo">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <ul class="contato-list">
                        <li class="contato-list-title contato-icon-map-marker">
                            <p class="h1 text-uppercase">Nosso Endereço</p>
                            <ul>
                                <li>Largo do Machado, 21 - Grupo 503 - Rio de Janeiro</li>
                            </ul>
                        </li>
                        <li class="contato-list-title contato-icon-headphones">
                            <p class="h1 text-uppercase">Ligue para nós</p>
                            <ul>
                                <li>(21) 2557-7730</li>
                            </ul>
                        </li>
                        <li class="contato-list-title contato-icon-share-alt">
                            <p class="h1 text-uppercase">Redes Sociais</p>
                            <ul>
                                <li><a href="https://www.facebook.com/piimoempreendimentos" target="_blank"><i class="icon-facebook"></i> /piimoempreendimentos</a></li>
                            </ul>
                        </li>
                        <li class="contato-list-title contato-icon-microphone">
                            <p class="h1 text-uppercase">Assessoria de Imprensa</p>
                            <ul>
                                <li class="strong">Fernanda Malcher</li>
                                <li><i class="icon-envelope"></i> fernanda@tmcomunicacoes.com.br</li>
                            </ul><br>
                            <ul>
                                <li class="strong">Caroline Romero</li>
                                <li><i class="icon-mobile"></i> (11) 2503-7525</li>
                                <li><i class="icon-envelope"></i> caroline@tmcomunicacoes.com.br</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="offset-md-1 col-md-5">
                    <div class="form-div">
                        <p class="h1 form-title text-uppercase text-center">Fale Conosco</p>
                        <p class="small text-center">Estamos aqui para atendê-lo.</p>
                        <form id="contato" class="contato form-vertical" method="post" action="">
                            <input type="hidden" name="area" value="FC">
                            <div class="row">
                                <div class="col-md-12"><label for="nome">Nome:</label> <input type="text" name="name-contato" class="form-control" placeholder="Digite seu nome"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 pr-md-1"><label for="email">Email:</label> <input type="text" name="email-contato" class="form-control" placeholder="Digite seu e-mail"></div>
                                <div class="col-md-6 pl-md-1"><label for="telefone">Telefone:</label> <input type="text" name="phone-contato" class="form-control" placeholder="Digite seu telefone"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 pr-md-1"><label for="email">Área pretendida:</label> 
                                <select class="custom-select" name="area" id="area">
                                    <option value="Adminstrativo">Administrativo</option>
                                    <option value="Financeiro">Financeiro</option>
                                </select>
                            </div>
                                <div class="col-md-6 pl-md-1"><label for="telefone">É cliente?</label> <select class="custom-select" name="isClient"><option value="1">Sim</option><option value="0">Não</option></select></div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 pr-md-1"><label for="email">Empreendimento:</label> <input type="text" name="development-contato" class="form-control" placeholder="Digite sua cidade"></div>
                                <div class="col-md-6 pl-md-1"><label for="telefone">Unidade:</label> <input type="text" name="unity-contato" class="form-control" placeholder="Digite seu bairro"></div>
                            </div>
                            <div class="row">
                                <div class="col-md-12"><label for="nome">Mensagem:</label> <textarea type="text" name="message-contato" class="form-control" rows="4" placeholder="Escreva sua mensagem"></textarea></div>
                            </div><br><button type="submit" class="btn btn-success btn-block text-uppercase"><i class="icon-paper-plane-o"></i> Enviar</button>
                            <div class="col-md-12"><img class="loader hidden" src="{{asset('images/ajax-loader.gif')}}" alt="" srcset=""></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="localizacao">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p class="h2 strong">Localização</p>
                    <p>Largo do Machado, 21 - Grupo 503 - Rio de Janeiro, RJ - <strong>CEP</strong> 22221-020</p>
                    <div id="gmap_canvas"></div>
                </div>
            </div>
        </div>
    </section>
</main>
@stop
@section('js')
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC0E67ovHYFP-tSS4WohWdKU4VxiFuO98U"></script>
<script>
    function init_map() {
        var myOptions = {
            zoom: 16,
            center: new google.maps.LatLng(-22.9312593, -43.179098299999964),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
        marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(-22.9312593, -43.179098299999964)
        });
        infowindow = new google.maps.InfoWindow({
            content: '<strong>Piimo Empreendimentos</strong> <br> Largo do Machado, 21 - Grupo 503 <br> CEP 22221-020'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
        infowindow.open(map, marker);
    }
    google.maps.event.addDomListener(window, 'load', init_map);

</script>

@stop