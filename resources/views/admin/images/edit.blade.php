@extends('adminlte::page')

@section('title', 'Piimo - Editar imagens')

@section('content_header')
<h1>Imagens</h1>
@stop
@section('css')
<style>
    .foto{
        margin: 10px 0 10px 0;
    }
</style>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
@stop
@section('content')
<div class="box">
    <!-- /.box-header -->
    <div class="box-body">
    <div class="row">
        <div class="col-md-12">
        @if(count($images) > 0)
            @foreach($images as $image)
            <div class="col-md-1 foto">
                <img src="{{url('images/empreendimentos/'.$image->nome)  }}" alt="" srcset="" class="img-responsive">
                <button data-id="{{ $image->id }}" class="btn btn-danger btn-block delete-post">Excluir</button>
            </div>
            @endforeach
            @include('admin.images.destroy')
        @endif
        </div>
    </div>
    </div>
</div>
@stop
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
<script>
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
</script>
@stop