@extends('adminlte::page')

@section('title', 'Piimo - Editar imagens')

@section('content_header')
<h1>Imagens</h1>
@stop
@section('css')
<link href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.0.1/min/dropzone.min.css" rel="stylesheet">
<link href="{{asset('vendor/dropzonejs/basic.css')}}"/>
<style>
    .foto{
        margin: 10px 0 10px 0;
    }
</style>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
@stop
@section('content')

<div class="box">
<div class="box-header">
  </div>
    <!-- /.box-header -->
    <div class="box-body">
    <div class="row">
        <div class="col-md-12">
            <h2>Imagens do empreendimento <button class="dropzone-btn btn btn-info pull-right" data-category="FOTO" data-id="{{$id}}">
                Incluir novo
            </button></h2>
            
        @if(count($imagens_emprendimento) > 0)
            @foreach($imagens_emprendimento as $ie)
            <div class="col-md-1 foto">
                <img src="{{url('images/empreendimentos/'.$ie->nome)  }}" alt="" srcset="" class="img-responsive">
                <button data-id="{{ $ie->id }}" class="btn btn-danger btn-block delete-post">Excluir</button>
            </div>
            @endforeach
            @include('admin.images.destroy')
        @endif
        </div>
	</div>
	<div class="row">
        <div class="col-md-12">
		@if(count($imagens_planta) > 0)
        <h2>Imagens da planta <button class="dropzone-btn btn btn-info pull-right" data-category="PLANTA" data-id="{{$id}}">
            Incluir novo
        </button></h2>
        
            @foreach($imagens_planta as $ip)
            <div class="col-md-1 foto">
                <img src="{{url('images/empreendimentos/'.$ip->nome)  }}" alt="" srcset="" class="img-responsive">
                <button data-id="{{ $ip->id }}" class="btn btn-danger btn-block delete-post">Excluir</button>
            </div>
            @endforeach
            @include('admin.images.destroy')
        @endif
        </div>
	</div>
	<div class="row">
        <div class="col-md-12">
		@if(count($imagens_obra) > 0)
        <h2>Imagens da obra <button class="dropzone-btn btn btn-info pull-right" data-category="OBRA" data-id="{{$id}}">
            Incluir novo
        </button></h2>
            @foreach($imagens_obra as $io)
            <div class="col-md-1 foto">
                <img src="{{url('images/empreendimentos/'.$io->nome)  }}" alt="" srcset="" class="img-responsive">
                <button data-id="{{ $io->id }}" class="btn btn-danger btn-block delete-post">Excluir</button>
            </div>
            @endforeach
            @include('admin.images.destroy')
        @endif
        </div>
    </div>
    </div>
</div>
@include('admin.images.create')
@stop
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/dropzone/4.2.0/min/dropzone.min.js"></script>
<script>
$('.dropzone-btn').on('click', function() {
    $('#texto').val($(this).data('category'));
	$('.modal-title').text('Incluir foto');
	$('#nova-foto').modal('show');
});
Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("#my-dropzone", { 
    url: "/dropzone/"+{{$id}},
    headers: {
        'x-csrf-token': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
    },
    addRemoveLinks: true,
    clickable: true,
    parallelUploads: 20,    
    maxFilesize: 2, 
    maxFiles: 20,
});

// delete a post
$('.delete-post').on('click', function() {
	$('.modal-title').text('Excluir Postagem');
	$('#id_delete').val($(this).data('id'));
	$('#publicacao_excluida').html($(this).data('title'));
	$('#excluir-publicacao').modal('show');
	id = $('#id_delete').val();
});
$('.delete').on('click', function() {
	var token = $(this).data('token');
	$.ajax({
		url: '/admin/images/' + id,
        type: 'DELETE',
		data: {_token :token},
		success: function(data) {
			location.reload();
		}
	});
});

function reload()
{
    location.reload();
}
</script>
@stop