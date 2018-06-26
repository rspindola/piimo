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
            <td>{{ str_limit($contact->isClient,30,'...') }}</td>
            <td>{{ str_limit($contact->development,30,'...') }}</td>
            <td>{{ str_limit($contact->unity,30,'...') }}</td>
            <td>{{ $contact->created_at }}</td>
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
</script>
@stop