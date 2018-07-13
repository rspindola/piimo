<div class="modal fade" id="nova-foto" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="defaultModalLabel"></h4>
			</div>
			<div class="modal-body">
				<div class="col-md-12">
					<form action="/dropzone" method="post" class="dropzone dropzone-file-area dz-clickable" id="my-dropzone">
					<input type="hidden" name="category" id="texto">
					<input type="month" class="pull-right" name="date" id="datepicker" style="top: 10px;position: fixed;right: 10px;">
						<div class="dz-message needsclick">
							<span class="text">
								Arraste fotos ou clique aqui para enviar.
							</span>
						</div>
					</form>
				</div>
			</div>
			<div class="modal-footer">
				<button onclick="javascript:location.reload();" type="button" class="btn btn-warning" data-dismiss="modal">
					<span class='glyphicon glyphicon-remove'></span> Fechar
				</button>
			</div>
		</div>
	</div>
</div>