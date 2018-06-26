@extends('vendor.piimo.msster')
@section('css')
@section('content')
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">{{$empreendimento->name}}</h1>
            </div>
        </div>
    </div>
</section>
<main id="payssandu">
    <section id="descricao" class="emp-section">
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <div class="row">
                        <div class="col-md-12 p-md-0 section-title d-flex justify-content-between">
                            <p class="h2 emp-title">Descrição</p>
                            <div class="strong emp-status">{{$empreendimento->status}}</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7 pl-md-0">
                            <p class="emp-desc">{!! $empreendimento->description !!}</p>
                        </div>
                        <div class="col-md-5 pr-0"><img src="{{ url('storage/'.$empreendimento->logo)}}" alt="{{$empreendimento->name}} - Logo" class="img-fluid">
                            <div class="emp-share"><a href="" target="_blank"><img src="{{asset('vendor/piimo/site/img/empreendimentos/icon-share.svg') }}" alt=""> </a><a href="" target="_blank"><img src="{{asset('vendor/piimo/site/img/empreendimentos/icon-star.svg') }}" alt=""> </a><a href="" target="_blank"><img src="{{asset('vendor/piimo/site/img/empreendimentos/icon-print.svg') }}" alt=""></a></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 p-md-0">
                            <ul class="nav nav-tabs" id="tab-emp" role="tablist">
                                <li class="nav-item"><a class="nav-link active" id="home-tab" data-toggle="tab" href="#ficha" role="tab" aria-controls="home" aria-selected="true">Ficha Técnica</a></li>
                                <li class="nav-item"><a class="nav-link" id="profile-tab" data-toggle="tab" href="#lazer" role="tab" aria-controls="profile" aria-selected="false">Lazer</a></li>
                            </ul>
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="ficha" role="tabpanel" aria-labelledby="home-tab">
                                    <ul class="list-unstyled">
                                        <li><strong>Nome:</strong> {{$empreendimento->name}}</li>
                                        <li><strong>Bairro:</strong> {{$empreendimento->neighborhood}}</li>
                                        <li><strong>Endereço:</strong> {{$empreendimento->street}}, {{$empreendimento->number}}</li>
                                        <li><strong>Quartos:</strong> {{$empreendimento->rooms}}</li>
                                        <li><strong>Metragem:</strong> {{$empreendimento->footage}}&sup2;</li>
                                        <li><strong>Status:</strong> {{$empreendimento->status}}</li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="lazer" role="tabpanel" aria-labelledby="profile-tab">
                                    <ul>
                                        <li>Salão de Festas</li>
                                        <li>Salão Gourmet</li>
                                        <li>Churrasqueira</li>
                                        <li>Salão de Jogos</li>
                                        <li>Brinquedoteca</li>
                                        <li>Academia</li>
                                        <li>Lounge</li>
                                        <li>Estar Coberto e descoberto</li>
                                        <li>Piscina</li>
                                        <li>Piscina infantil</li>
                                        <li>Deck molhado</li>
                                        <li>Ducha</li>
                                        <li>Hidromassagem</li>
                                        <li>Repouso</li>
                                        <li>Sauna</li>
                                        <li>Massagem</li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="tour" role="tabpanel" aria-labelledby="contact-tab">...</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5"><img src="{{ url('storage/'.$empreendimento->img_featured)}}" alt="{{$empreendimento->name}} - Fachada" class="img-fluid"></div>
            </div>
        </div>
    </section>
    <section id="imagens" class="emp-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-md-0 section-title">
                    <p class="h2 emp-title">Imagens</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="glry-plantas d-flex flex-wrap justify-content-center">
                        @foreach($imagens_empreendimento as $img)
                            @if(starts_with($img->nome, 'empreendimento-'))
                            <a href="{{ url('images/empreendimentos/'.$img->nome)}}">
                                <img src="{{ url('images/empreendimentos/'.$img->nome)}}" alt="">
                            </a>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="plantas" class="emp-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-md-0 section-title">
                    <p class="h2 emp-title">Plantas</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="glry-plantas d-flex flex-wrap justify-content-center">
                        @foreach($imagens_plantas as $planta)
                            @if(starts_with($planta->nome, 'planta-'))
                            <a href="{{ url('images/empreendimentos/'.$planta->nome)}}">
                                <img src="{{ url('images/empreendimentos/'.$planta->nome)}}" alt="">
                            </a>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="localizacao">
        <div class="container">
            <div class="row">
                <div class="col-md-12 p-md-0 section-title">
                    <p class="h2 emp-title">Localização</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div id="gmap_canvas"></div>
                    <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC0E67ovHYFP-tSS4WohWdKU4VxiFuO98U"></script>
                    <script>
                        function init_map() {
                            var myOptions = {
                                zoom: 16,
                                center: new google.maps.LatLng({{$empreendimento->lat}}, {{$empreendimento->lng}}),
                                mapTypeId: google.maps.MapTypeId.ROADMAP
                            };
                            map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
                            marker = new google.maps.Marker({
                                map: map,
                                position: new google.maps.LatLng({{$empreendimento->lat}}, {{$empreendimento->lng}})
                            });
                            infowindow = new google.maps.InfoWindow({
                                content: '<strong>{{$empreendimento->name}}</strong> <br> {{$empreendimento->street}}, {{$empreendimento->number}} - {{$empreendimento->neighborhood}}'
                            });
                            google.maps.event.addListener(marker, 'click', function() {
                                infowindow.open(map, marker);
                            });
                            infowindow.open(map, marker);
                        }
                        google.maps.event.addDomListener(window, 'load', init_map);

                    </script>
                </div>
            </div>
        </div>
    </section>
</main>
@stop
@section('js')
@stop