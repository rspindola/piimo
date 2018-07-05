@extends('adminlte::page')

@section('title', 'Piimo Admin | Empreendimentos')

@section('content_header')
<h1>Empreendimentos</h1>
@stop
@section('css')
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
@stop
@section('content')
<div class="box">
  <div class="box-header">
    <a href="{{route('empreendimentos.create')}}" class="btn btn-success pull-right" data-toggle="modal">Incluir Empreendimento</a>
  </div>
  <!-- /.box-header -->
  <div class="box-body">
    <div class="table-responsive">
      <table id="example1" class="table table-bordered table-striped display">
        <thead>
          <tr>
            <th class="col-md-2">Nome</th>
            <th class="col-md-3">Endereço</th>
            <th class="col-md-3">Bairro</th>
            <th class="col-md-2">Status</th>
            <th class="col-md-1">Ação</th>
          </tr>
        </thead>
        <tbody>
        @if(count($developments) > 0)
          @foreach($developments as $development)
          <tr>
            <td>{{ str_limit($development->name,30,'...') }}</td>
            <td>{{ str_limit($development->street,30,'...') }}</td>
            <td>{{ str_limit($development->neighborhood,30,'...') }}</td>
            <td>{{ $development->status }}</td>
            <td class="text-center">
                <a href="{{route('empreendimentos.edit',[$development->id])}}" class="btn btn-sm btn-info" title="Editar">
                  <i class="fa fa-edit"></i>
                </a>
                <a href="{{route('images.edit',[$development->id])}}" class="btn btn-sm btn-warning" title="Galeria de fotos" >
                  <i class="fa fa-file"></i>
                </a>
                <a data-id="{{ $development->id }}" data-title="{{$development->name}}" class="delete-post btn btn-sm btn-danger" title="Excluir">
                  <i class="fa fa-trash"></i>
                </a>
            </td>
          </tr>
          @endforeach
          @include('admin.development.destroy')
        @endif
        </tbody>
      </table>
    </div>
  </div>
</div>
@stop
@section('js')
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
		url: '/admin/empreendimentos/' + id,
    type: 'DELETE',
		data: {_token :token},
		success: function(data) {
			location.reload();
		}
	});
});

$(document).ready(function() {
    $('#example1').DataTable( {
      "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.12/i18n/Portuguese-Brasil.json"
        },
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copyHtml5',
                exportOptions: {
                    columns: [ 0, ':visible' ]
                }
            },
            {
                extend: 'excelHtml5',
                exportOptions: {
                    columns: ':visible'
                }
            },
            {
                extend: 'pdfHtml5',
                exportOptions: {
                    columns: [ 0, 1, 2, 5 ]
                }
            },
            'colvis'
        ]
    } );
} );
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
@stop