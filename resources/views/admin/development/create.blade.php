@extends('adminlte::page')

@section('title', 'Admin | Criar Empreendimento')
@section('css')
<link href='https://fonts.googleapis.com/css?family=Quantico' rel='stylesheet' type='text/css'/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.2.0/css/ion.rangeSlider.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.2.0/css/ion.rangeSlider.skinHTML5.min.css" />
@stop
@section('content_header')
<h1>Novo Empreendimento</h1>
@stop

@section('content')
<div class="row">
	<div class="col-md-12">
		<!-- general form elements -->
		<div class="box box-primary">
			<!-- form start -->
			<form role="form" action="{{route('empreendimentos.store')}}" method="POST" enctype="multipart/form-data">
			{{ csrf_field() }}
		
				<input id="lat" type="hidden" name="lat" value="{{ old('lat') }}">
				<input id="lng" type="hidden" name="lng" value="{{ old('lng') }}">
				<div class="box-body">
					<div class="col-md-8">
						<div class="form-group has-feedback {{ $errors->has('name') ? 'has-error' : '' }} col-md-12">
							<label for="titulo">Nome</label>
							<input type="text" maxlength="60" name="name" class="form-control" value="{{ old('name') }}" placeholder="Digite o nome" >
							@if ($errors->has('name'))
								<span class="help-block">
									<strong>{{ $errors->first('name') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('zipcode') ? 'has-error' : '' }} col-md-3">
							<label for="titulo">Cep</label>
							<input id="cep" type="text" maxlength="60" name="zipcode" class="form-control" value="{{ old('zipcode') }}" placeholder="Digite o CEP" onblur="pegarCoord()">
							@if ($errors->has('zipcode'))
								<span class="help-block">
									<strong>{{ $errors->first('zipcode') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('street') ? 'has-error' : '' }} col-md-6">
							<label for="titulo">Endereço</label>
							<input id="logradouro" type="text" maxlength="60" name="street" class="form-control" value="{{ old('street') }}" placeholder="Digite o endereço">
							@if ($errors->has('street'))
								<span class="help-block">
									<strong>{{ $errors->first('street') }}</strong>
								</span>
							@endif
						</div>
						<div class="form-group has-feedback {{ $errors->has('number') ? 'has-error' : '' }} col-md-3">
							<label for="destaque">Número</label>
							<input id="numero" type="text" name="number" class="form-control"  value="{{ old('number') }}" placeholder="Digite o número" onblur="pegarCoord()">
							@if ($errors->has('number'))
								<span class="help-block">
									<strong>{{ $errors->first('number') }}</strong>
								</span>
							@endif
						</div>
						<div class="form-group has-feedback {{ $errors->has('neighborhood') ? 'has-error' : '' }} col-md-5">
							<label for="destaque">Bairro</label>
							<input id="bairro" type="text" name="neighborhood" class="form-control" value="{{ old('neighborhood') }}" placeholder="Digite o bairro">
							@if ($errors->has('neighborhood'))
								<span class="help-block">
									<strong>{{ $errors->first('neighborhood') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('city') ? 'has-error' : '' }} col-md-5">
							<label for="destaque">Cidade</label>
							<input id="cidade" type="text" name="city" class="form-control" value="{{ old('city') }}" placeholder="Digite a cidade">
							@if ($errors->has('city'))
								<span class="help-block">
									<strong>{{ $errors->first('city') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('country') ? 'has-error' : '' }} col-md-2">
							<label for="destaque">UF</label>
							<input id="uf" type="text" name="country" class="form-control"  value="{{ old('country') }}" placeholder="Digite a UF">
							@if ($errors->has('country'))
								<span class="help-block">
									<strong>{{ $errors->first('country') }}</strong>
								</span>
							@endif
						</div>
						<div class="form-group has-feedback {{ $errors->has('description') ? 'has-error' : '' }} col-md-12">
							<textarea name="description">{{ old('description') }}</textarea>
							@if ($errors->has('description'))
								<span class="help-block">
									<strong>{{ $errors->first('description') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('rooms') ? 'has-error' : '' }} col-md-4">
							<label for="destaque">Quartos</label>
							<input type="text" name="rooms" class="form-control" id="rooms" value="{{ old('rooms') }}" placeholder="Número de quartos">
							@if ($errors->has('rooms'))
								<span class="help-block">
									<strong>{{ $errors->first('rooms') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('rooms') ? 'has-error' : '' }} col-md-4">
							<label for="destaque">Metragem</label>
							<input type="text" name="footage" class="form-control" id="footage" value="{{ old('footage') }}" placeholder="Digite a metragem">
							@if ($errors->has('rooms'))
								<span class="help-block">
									<strong>{{ $errors->first('rooms') }}</strong>
								</span>
							@endif
						</div>
                        <div class="form-group has-feedback {{ $errors->has('status') ? 'has-error' : '' }} col-md-4">
							<label for="destaque">Status</label>
							<select name="status" class="form-control" id="status">
								<option value="LANÇAMENTO">Lançamento</option>
								<option value="OBRAS">Obras</option>
								<option value="PRONTO">Pronto</option>
							</select>
							@if ($errors->has('status'))
								<span class="help-block">
									<strong>{{ $errors->first('status') }}</strong>
								</span>
							@endif
						</div>
					</div>
                    <div class="col-md-4">
                        <div class="form-group has-feedback {{ $errors->has('logo') ? 'has-error' : '' }} col-md-12">
                            <label for="imagem">Logo</label>
                            <input name="logo" type="file" id="imagem" accept="image/*" onchange="loadFile(event)">
							@if ($errors->has('logo'))
								<span class="help-block">
									<strong>{{ $errors->first('logo') }}</strong>
								</span>
							@endif
						</div>
						<div class="col-md-12">
							<img class="img-responsive" id="output"/>
						</div>
						<div class="form-group has-feedback {{ $errors->has('img_featured') ? 'has-error' : '' }} col-md-12">
                            <label for="imagem">Imagem da fachada</label>
                            <input name="img_featured" type="file" id="img_featured" accept="image/*">
							@if ($errors->has('img_featured'))
								<span class="help-block">
									<strong>{{ $errors->first('img_featured') }}</strong>
								</span>
							@endif
                        </div>
						<div class="col-md-12">
							<img class="img-responsive" id="output"/>
						</div>
						<div class="form-group has-feedback {{ $errors->has('photos') ? 'has-error' : '' }} col-md-12">
                            <label for="imagem">Imagens do empreendimento</label>
                            <input type="file" class="form-control" name="photos[]" accept="image/*" multiple />
							@if ($errors->has('photos'))
								<span class="help-block">
									<strong>{{ $errors->first('photos') }}</strong>
								</span>
							@endif
                        </div>
						<div class="form-group has-feedback {{ $errors->has('photos_planta') ? 'has-error' : '' }} col-md-12">
                            <label for="imagem">Imagens da planta</label>
                            <input type="file" class="form-control" name="photos_planta[]" accept="image/*" multiple />
							@if ($errors->has('photos_planta'))
								<span class="help-block">
									<strong>{{ $errors->first('photos_planta') }}</strong>
								</span>
							@endif
						</div>
						<div class="col-md-12 div-obra hidden">
							<h4>Detalhes da obra</h4>
							<div class="form-group has-feedback {{ $errors->has('photos_obra') ? 'has-error' : '' }} col-md-12">
								<label for="imagem">Imagens da obra</label>
								<input type="file" class="form-control" name="photos_obra[]" accept="image/*" multiple />
								@if ($errors->has('photos_obra'))
									<span class="help-block">
										<strong>{{ $errors->first('photos_obra') }}</strong>
									</span>
								@endif
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Terreno</label>
								<input type="text" class="range" id="terreno" name="terreno" value="{{ old('terreno') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Fundações</label>
								<input type="text" class="range" id="fundacao" name="fundacao" value="{{ old('fundacao') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Estrutura</label>
								<input type="text" class="range" id="estrutura" name="estrutura" value="{{ old('estrutura') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Alvenarias</label>
								<input type="text" class="range" id="alvenaria" name="alvenaria" value="{{ old('alvenaria') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Instalações</label>
								<input type="text" class="range" id="instalacao" name="instalacao" value="{{ old('instalacao') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Revestimento</label>
								<input type="text" class="range" id="revestimento" name="revestimento" value="{{ old('revestimento') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Acabamento</label>
								<input type="text" class="range" id="acabamento" name="acabamento" value="{{ old('acabamento') }}" />
							</div>
							<div class="col-md-6 col-sm-12 col-xs-12">
								<label for="">Entrega</label>
								<input type="text" class="range" id="entrega" name="entrega" value="{{ old('entrega') }}" />
							</div>
						</div>
					</div>
				</div>
				<!-- /.box-body -->
				<div class="box-footer text-center">
					<a href="{{route('empreendimentos.index')}}" class="btn btn-danger">Cancelar</a>
					<button type="submit" class="btn btn-success">Salvar</button>
				</div>
			</form>
		</div>
		<!-- /.box -->
	</div>
</div>
@stop
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.2.0/js/ion.rangeSlider.min.js"></script>
<script src="https://maps.google.com/maps/api/js?key=AIzaSyBLezfrq9tUx1R6oumaft7H2Xz77_sLcUM"></script>
<script src="{{ asset('/js/gmaps.js') }}"></script>
<script src="{{ asset('/js/correios.js') }}"></script>
<script src="{{ asset('/vendor/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('/vendor/ckeditor/adapters/jquery.js') }}"></script>
<script type="text/javascript">
	$('textarea').ckeditor();
	$('.range').ionRangeSlider({
		min: 0,
		max: 100,
	});
	$('#status').change(function(){
		if ($('#status').val() == 'OBRAS') {
			$('.div-obra').removeClass('hidden');
		} else {
			$('.div-obra').addClass('hidden')
		}
	});
	$('.select2-multi').select2();
	var loadFile = function(event) {
		var reader = new FileReader();
		reader.onload = function(){
		var output = document.getElementById('output');
		output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	function pegarCoord(){
		GMaps.geocode({
			address: $("#logradouro").val() + $("#numero").val(),
			callback: function(results, status){
				if(status=='OK'){
					var latlng = results[0].geometry.location;
					$("#lat").val(latlng.lat());
					$("#lng").val(latlng.lng());
				}
			}
		});
	}
</script>
@stop