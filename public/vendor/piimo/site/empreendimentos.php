<?php include_once('header.html') ?>
<section id="page-title">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="text-uppercase">Empreendimentos</h1>
            </div>
        </div>
    </div>
</section>
<main>
    <div class="container">
        <div id="filtro" class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Selecione o status da obra ou bairro: <img src="img/empreendimentos/icon-filter.svg" class="icon-filtro d-none d-md-block" alt=""></div>
                    <div class="card-body">
                        <ul class="filtro-obras menu-filtro" data-filter-group="status">
                            <li><a href="javascript:void(0)" class="filtro-selecionado" data-filter="*">Todos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".lancamento">Lançamentos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".obras">Em Obras</a></li>
                            <li><a href="javascript:void(0)" data-filter=".pronto">Prontos</a></li>
                        </ul>
                        <hr>
                        <ul class="filtro-bairros menu-filtro" data-filter-group="bairro">
                            <li><a href="javascript:void(0)" class="filtro-selecionado" data-filter="*">Todos</a></li>
                            <li><a href="javascript:void(0)" data-filter=".recreio">Recreio</a></li>
                            <li><a href="javascript:void(0)" data-filter=".botafogo">Botafogo</a></li>
                            <li><a href="javascript:void(0)" data-filter=".flamengo">Flamengo</a></li>
                            <li><a href="javascript:void(0)" data-filter=".ipanema">Ipanema</a></li>
                            <li><a href="javascript:void(0)" data-filter=".lagoa">Lagoa</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="card-empreendimentos" class="row filtro-emp">
            <div class="col-md-3 lancamento flamengo">
                <div class="card">
                    <a href="residencial-payssandu.php">
                        <div class="card-header text-uppercase">Lançamento</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-residencial_payssandu-fachada.jpg" alt="Residencial Payssandu - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">Residencial Payssandu</strong><br>Rua Paissandu - Flamengo</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 obras flamengo">
                <div class="card">
                    <a href="harmonie-residencial.php">
                        <div class="card-header text-uppercase">Em Obras</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-harmonie_residencial-fachada.jpg" alt="Harmonie Residencial - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">Harmonie Flamengo</strong><br>Rua Marquês de Abrantes - Flamengo</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 obras ipanema">
                <div class="card">
                    <a href="redentor-ipanema.php">
                        <div class="card-header text-uppercase">Em Obras</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-redentor_ipamema-fachada.jpg" alt="Redentor Ipanema - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">Redentor Ipanema</strong><br>Rua Redentor - Ipanema</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 obras lagoa">
                <div class="card">
                    <a href="esplendido-lagoa.php">
                        <div class="card-header text-uppercase">Em Obras</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-esplendido_lagoa-fachada.jpg" alt="Esplêndido Lagoa - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">Esplêndido</strong><br>Av. Epitácio Pessoa - Lagoa</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 pronto recreio">
                <div class="card">
                    <a href="vivendi-residencial.php">
                        <div class="card-header text-uppercase">Pronto</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-vivendi_residencial-fachada.jpg" alt="Vivendi Residencial - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">Vivendi Residencial</strong><br>Rua Artur Possolo - Recreio</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 pronto flamengo">
                <div class="card">
                    <a href="all-suites.php">
                        <div class="card-header text-uppercase">Pronto</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-111_all_suites-fachada.jpg" alt="111 All Suites - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">111 All Suites</strong><br>Rua Senador Vergueiro - Flamengo</div>
                    </a>
                </div>
            </div>
            <div class="col-md-3 pronto botafogo">
                <div class="card">
                    <a href="la-reserve.php">
                        <div class="card-header text-uppercase">Pronto</div>
                        <div class="card-body"><img src="img/empreendimentos/piimo-la_reserve-fachada.jpg" alt="La Reserve - Fachada" class="img-fluid"></div>
                        <div class="card-footer"><strong class="text-uppercase">La Reserve</strong><br>Rua Vicente de Sousa - Botafogo</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>
<?php include_once('footer.html') ?>
