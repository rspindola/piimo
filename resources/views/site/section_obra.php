<section id="obras" class="emp-section">
      <div class="container">
         <div class="row">
            <div class="col-md-7">
               <div class="row">
                  <div class="col-md-12 section-title">
                     <p class="h2 emp-title">Andamento das Obras</p>
                  </div>
               </div>
               <div class="row">
                  <div class="col-md-12 p-md-0">
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Preparo do Terreno</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->terreno}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Fundações</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->fundacao}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Estrutura</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->estrutura}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Alvenaria</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->alvenaria}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Instalações</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->instalacao}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Revestimentos</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->revestimento}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Acabamento/Pintura</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->acabamento}}%</p>
                        </div>
                     </div>
                     <div class="row p-md-0">
                        <div class="col-4 col-md-4">
                           <p class="text-right strong">Entrega</p>
                        </div>
                        <div class="col-6 col-md-7 p-md-0">
                           <div class="progress">
                              <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
                           </div>
                        </div>
                        <div class="col-2 col-md-1">
                           <p class="strong">{{$obra->entrega}}%</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-5">
               <select class="form-control filtro-obras">
                  <option value=".mar-18">Março de 2018</option>
               </select>
               <div class="wrap-obras">
                  <div class="glry-obras mar-18">
                     <div class="d-flex flex-wrap justify-content-center"><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-01.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-01.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-02.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-02.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-03.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-03.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-04.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-04_thumb.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-05.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-05.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-06.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-06.jpg" alt=""></a><a href="img/empreendimentos/harmonie/harmonie-residencial-obra-07.jpg"><img src="img/empreendimentos/harmonie/harmonie-residencial-obra-07.jpg" alt=""></a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>