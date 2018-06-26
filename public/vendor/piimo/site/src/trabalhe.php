<?php include_once('header.html') ?>
   
   <section id="page-title">
       <div class="container">
           <div class="row">
               <div class="col-md-12">
                   <h1 class="text-uppercase">Trabalhe Conosco</h1>
               </div>
           </div>
       </div>
   </section>
   
   <main id="trabalhe-piimo">
    
        <div class="container">
        
            <div class="row">
               
                <div class="col-md-6">
                   
                    <p class="h2 text-uppercase">Junte-se a nós</p>
                        
                    <p class="small text-justify">Buscamos profissionais dinâmicos, com capacidade para vencer desafios, que saibam lidar com questões diversas de forma construtiva e, sobretudo, que tenham comprometimento, postura ética e respeito em suas relações.</p>
                    
                    <p class="small text-justify">Se você se identifica com nossa proposta e tem interesse em fazer parte da nossa equipe, cadastre seu currículo.</p>
                    
                    <div class="form-div">
                        
                        <form id="form-contato" class="form-vertical" method="post" action="">    
                        
                            <div class="row"> 
                                <div class="col-md-12">
                                    <label for="nome">Nome:</label>
                                    <input type="text" name="nome" class="form-control" placeholder="Digite seu nome">
                                </div>
                            </div>
                               
                            <div class="row"> 
                                <div class="col-md-12">
                                    <label for="email">Email:</label>
                                    <input type="text" name="email" class="form-control" placeholder="Digite seu e-mail">
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6 pr-md-1">
                                    <label for="telefone">Telefone (fixo):</label>
                                    <input type="text" name="telefone" class="form-control" placeholder="Digite seu telefone">
                                </div>
                                <div class="col-md-6 pl-md-1">
                                    <label for="telefone-celular">Telefone (celular):</label>
                                    <input type="text" name="telefone-celular" class="form-control" placeholder="Digite seu telefone">
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="curriculo" class="btn btn-success">Anexo:</label>
                                    <input id="curriculo" type="file" name="curriculo">
                                </div>
                            </div>
                            
                            <div class="row"> 
                                <div class="col-md-12">
                                    <label for="linkedin">Linkedin:</label>
                                    <input type="text" name="linkedin" class="form-control" placeholder="Digite seu perfil no LinkedIn">
                                </div>
                            </div>
                            
                                <br>

                            <button type="submit" class="btn btn-success btn-block text-uppercase">
                                <i class="icon-paper-plane-o"></i> Enviar currículo
                            </button>    

                        </form>
                        
                    </div>
                    
                </div>
                
                <div class="offset-md-1 col-md-5">
                  
                    <img src="img/trabalhe/piimo_trabalhe-conosco.jpg" alt="" class="img-fluid">
                    
                </div>
                
            </div>
        
       </div>
       

   </main>
    
<?php include_once('footer.html') ?>