@extends('adminlte::page')

@section('title', 'Piimo Admin | Leads')

@section('content_header')
<h1>Leads - {{$titulo}}</h1>
@stop
@section('css')
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css">
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.5.2/css/buttons.dataTables.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/select/1.2.7/css/select.dataTables.min.css">
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
            <th>Telefone</th>
            <th>Data do contato</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        @if(count($leads) > 0)
          @foreach($leads as $lead)
          <tr>
            <td>{{ str_limit($lead->name,30,'...') }}</td>
            <td>{{ str_limit($lead->email,30,'...') }}</td>
            <td>{{ str_limit($lead->utm_source,30,'...') }}</td>
            <td>{{ str_limit($lead->utm_medium,30,'...') }}</td>
            <td>{{ str_limit($lead->phone,30,'...') }}</td>
            <td>{{Carbon\Carbon::parse($lead->created_at)->format('d/m/Y H:i') }}</td>
            <td class="text-center">
              <a data-title="{{$lead->message}}" class="show btn btn-sm btn-info">
                  Ver
                </a>
            </td>
          </tr>
          @endforeach
          @include('admin.leads.show')
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
	$('#show-lead').modal('show');
});
</script>
<script src="{{asset('js/datatable.js')}}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.flash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.print.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.2/js/buttons.colVis.min.js"></script>
<script src="https://cdn.datatables.net/select/1.2.7/js/dataTables.select.min.js"></script>

@stop