@extends('adminlte::page')

@section('title', 'Admin | Curriculos')

@section('content_header')
<h1>Curriculos</h1>
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
            <th>Telefone</th>
            <th>Celular</th>
            <th>Linkedin</th>
            <th>Data do contato</th>
            <th>Anexo</th>
          </tr>
        </thead>
        <tbody>
        @if(count($curriculos) > 0)
          @foreach($curriculos as $curriculo)
          <tr>
            <td>{{ str_limit($curriculo->name,30,'...') }}</td>
            <td>{{ str_limit($curriculo->email,30,'...') }}</td>
            <td>{{ str_limit($curriculo->phone,30,'...') }}</td>
            <td>{{ str_limit($curriculo->cel,30,'...') }}</td>
            <td>{{ str_limit($curriculo->linkedin,30,'...') }}</td>
            <td>{{Carbon\Carbon::parse($curriculo->created_at)->format('d/m/Y H:i') }}</td>
            <td class="text-center">
              <a href="{{ url('storage/'.$curriculo->attachment)}}" target="_blank" class="btn btn-sm btn-info">
                  Ver
                </a>
            </td>
          </tr>
          @endforeach
          @include('admin.employment.show')
        @endif
        </tbody>
      </table>
    </div>
  </div>
</div>
@stop
@section('js')
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js"></script>
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