@extends('vendor.piimo.msster')
@section('css')
<style>

.gallery-title
{
    font-size: 36px;
    color: #42B32F;
    text-align: center;
    font-weight: 500;
    margin-bottom: 70px;
}
.gallery-title:after {
    content: "";
    position: absolute;
    width: 7.5%;
    left: 46.5%;
    height: 45px;
    border-bottom: 1px solid #5e5e5e;
}
.filter-button
{
    font-size: 18px;
    border: 1px solid #42B32F;
    border-radius: 5px;
    text-align: center;
    color: #42B32F;
    margin-bottom: 30px;

}
.filter-button:hover
{
    font-size: 18px;
    border: 1px solid #42B32F;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    background-color: #42B32F;

}
.btn-default:active .filter-button:active
{
    background-color: #42B32F;
    color: white;
}

.port-image
{
    width: 100%;
}

.gallery_product
{
    margin-bottom: 30px;
}

</style>
@stop
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
                        <div class="col-md-5 pr-0"><img src="{{ asset('images/logos/'.$empreendimento->logo)}}" alt="{{$empreendimento->name}} - Logo" class="img-fluid">
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
                                        <li><strong>Metragem:</strong> {{$empreendimento->footage}}</li>
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
                <div class="col-md-5"><img src="{{ asset('images/features/'.$empreendimento->img_featured)}}" alt="{{$empreendimento->name}} - Fachada" class="img-fluid"></div>
            </div>
        </div>
    </section>
    @if($empreendimento->status == "OBRAS")
    <section id="obras" class="emp-section">
      <div class="container">
         <div class="row">
            <div class="col-md-7">
               <div class="row">
                  <div class="col-md-12 section-title">
                     <p class="h2 emp-title">Andamento das Obras</p>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 p-md-0">
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Preparo do Terreno</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->terreno}}%" aria-valuenow="{{$obra->terreno}}" aria-valuemin="0" aria-valuemax="100">{{$obra->terreno}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->terreno}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Fundações</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->fundacao}}%" aria-valuenow="{{$obra->fundacao}}" aria-valuemin="0" aria-valuemax="100">{{$obra->fundacao}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->fundacao}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Estrutura</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->estrutura}}%" aria-valuenow="{{$obra->estrutura}}" aria-valuemin="0" aria-valuemax="100">{{$obra->estrutura}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->estrutura}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Alvenaria</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->alvenaria}}%" aria-valuenow="{{$obra->alvenaria}}" aria-valuemin="0" aria-valuemax="100">{{$obra->alvenaria}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->alvenaria}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Instalações</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->instalacao}}%" aria-valuenow="{{$obra->instalacao}}" aria-valuemin="0" aria-valuemax="100">{{$obra->instalacao}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->instalacao}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Revestimentos</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->revestimento}}%" aria-valuenow="{{$obra->revestimento}}" aria-valuemin="0" aria-valuemax="100">{{$obra->revestimento}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->revestimento}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Acabamento/Pintura</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->acabamento}}%" aria-valuenow="{{$obra->acabamento}}" aria-valuemin="0" aria-valuemax="100">{{$obra->acabamento}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->acabamento}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Entrega</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: {{$obra->entrega}}%" aria-valuenow="{{$obra->entrega}}" aria-valuemin="0" aria-valuemax="100">{{$obra->entrega}}%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->entrega}}%</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-5">
               <select class="form-control filtrar">
                    <option value="all">Todas</option>
                    <option value="2018-01">Janeiro de 2018</option>
                    <option value="2018-02">Fevereiro de 2018</option>
                    <option value="2018-03">Março de 2018</option>
                    <option value="2018-04">Abril de 2018</option>
                    <option value="2018-05">Maio de 2018</option>
                    <option value="2018-06">Junho de 2018</option>
                    <option value="2018-07">Julho de 2018</option>
                    <option value="2018-08">Agosto de 2018</option>
                    <option value="2018-09">Setembro de 2018</option>
                    <option value="2018-10">Outubro de 2018</option>
                    <option value="2018-11">Novembro de 2018</option>
                    <option value="2018-12">Dezembro de 2018</option>
               </select>
               <div class="wrap-obras">
                  <div class="glry-obras mar-18">
                     <div class="d-flex flex-wrap filtro-emp justify-content-center">
                        @foreach($imagens_obra as $img)
                        <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter {{Carbon\Carbon::parse($img->date)->format('Y-m') }}">
                            <a href="{{ url('images/empreendimentos/'.$img->nome)}}">
                                <img src="{{ url('images/empreendimentos/thumb/'.$img->nome)}}" alt="">
                            </a>
</div>
                        @endforeach
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
    @endif
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
                        @foreach($imagens_emprendimento as $img)
                            <a href="{{ url('images/empreendimentos/'.$img->nome)}}">
                                <img src="{{ url('images/empreendimentos/thumb/'.$img->nome)}}" alt="">
                            </a>
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
                        @foreach($imagens_planta as $planta)
                            <a href="{{ url('images/empreendimentos/'.$planta->nome)}}">
                                <img src="{{ url('images/empreendimentos/'.$planta->nome)}}" alt="">
                            </a>
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
<script>
    $(document).ready(function(){

        $(".filtrar").change(function(){
            var value = $('.filtrar').val();
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').show('1000');
            }
            else
            {
        //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
        //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).hide('3000');
                $('.filter').filter('.'+value).show('3000');
                
            }
        });
        if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
</script>
@stop