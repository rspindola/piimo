@extends('adminlte::page')

@section('title', 'Piimo Admin | Contato')

@section('content_header')
<h1>Contatos</h1>
@stop
@section('css')
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
@stop
@section('content')
<div class="box">
  <!-- /.box-header -->
  <div class="box-body">
    <div class="table-responsive">
      <table id="example1" class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Area</th>
            <th>Cliente</th>
            <th>Empreendimento</th>
            <th>Unidade</th>
            <th>Data do contato</th>
          </tr>
        </thead>
        <tbody>
        @if(count($contacts) > 0)
          @foreach($contacts as $contact)
          <tr>
            <td>{{ str_limit($contact->name,30,'...') }}</td>
            <td>{{ str_limit($contact->email,30,'...') }}</td>
            <td>{{ str_limit($contact->phone,30,'...') }}</td>
            <td>{{ str_limit($contact->area,30,'...') }}</td>
            <td>{{ $contact->isClient == 0 ? 'Não' : 'Sim' }}</td>
            <td>{{ str_limit($contact->development,30,'...') }}</td>
            <td>{{ str_limit($contact->unity,30,'...') }}</td>
            <td>{{Carbon\Carbon::parse($contact->created_at)->format('d/m/Y H:i') }}</td>
            <td class="text-center">
              <a data-id="{{ $contact->id }}" data-title="{{$contact->message}}" class="show btn btn-sm btn-info">
                  Ver
                </a>
            </td>
          </tr>
          @endforeach
          @include('admin.contact.show')
        @endif
        </tbody>
      </table>
    </div>
  </div>
</div>
@stop
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
<script>
$('.show').on('click', function() {
	$('#message').html($(this).data('title'));
	$('#show-contact').modal('show');
});
$(document).ready(function() {
    $('#example1').DataTable( {
      "language": {
                "url": "https://cdn.datatables.net/plug-ins/1.10.12/i18n/Portuguese-Brasil.json"
        },
        dom: 'Bfrtip',
        buttons: [
            'copyHtml5',
            'excelHtml5',
            'csvHtml5',
            'pdfHtml5'
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
@stop