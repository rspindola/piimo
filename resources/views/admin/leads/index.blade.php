@extends('adminlte::page')

@section('title', 'Piimo Admin | Leads')

@section('content_header')
<h1>Leads</h1>
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
            <th>#</th>
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
            <td>{{ str_limit($lead->area,30,'...') }}</td>
            <td>{{ str_limit($lead->name,30,'...') }}</td>
            <td>{{ str_limit($lead->email,30,'...') }}</td>
            <td>{{ str_limit($lead->utm_source,30,'...') }}</td>
            <td>{{ str_limit($lead->utm_medium,30,'...') }}</td>
            <td>{{ str_limit($lead->phone,30,'...') }}</td>
            <td>{{Carbon\Carbon::parse($cotacao->created_at)->format('d/m/Y H:i') }}</td>
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
@stop