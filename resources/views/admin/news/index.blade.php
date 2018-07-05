@extends('adminlte::page')

@section('title', 'Piimo Admin | Newsletter')

@section('content_header')
<h1>newsletter</h1>
@stop
@section('css')
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.dataTables.min.css">
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
            <th>Origem</th>
            <th>Peça</th>
            <th>Data do contato</th>
          </tr>
        </thead>
        <tbody>
        @if(count($newsletter) > 0)
          @foreach($newsletter as $new)
          <tr>
            <td>{{ str_limit($new->name,30,'...') }}</td>
            <td>{{ str_limit($new->email,30,'...') }}</td>
            <td>{{ str_limit($new->utm_source,30,'...') }}</td>
            <td>{{ str_limit($new->utm_medium,30,'...') }}</td>
            <td>{{Carbon\Carbon::parse($new->created_at)->format('d/m/Y H:i') }}</td>
          </tr>
          @endforeach
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
	$('#show-new').modal('show');
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