<div class="modal fade" id="excluir-publicacao" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title">Excluir Empreendimento</h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<form action="" id="form-excluirCardapio" method="post" enctype="multipart/form-data">
				<div class="modal-body">
					<input type="hidden" class="form-control" id="id_delete">
					<p>Tem certeza que deseja excluir o empreendimento?</p>
				</div>
				<div class="modal-footer">
					<button type="button" data-token="{{ csrf_token() }}" class="btn btn-danger delete" data-dismiss="modal"> Sim</button>
					<button type="button" class="btn btn-warning" data-dismiss="modal"> Não</button>
				</div>
			</form>
		</div>
	</div>
</div>