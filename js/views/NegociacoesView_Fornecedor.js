class NegociacoesView_Fornecedor{

  constructor(elemento){

    this._elemento = elemento;

  }


  _tempate(model){

      return  `
                <table class="table table-hover table-bordered"><br>
                <thead>
                    <tr>
                      <th class=" titulo2">Código</th>
                      <th class=" titulo2">Fornecedor</th>
                      <th class=" titulo2">Responsável</th>
                      <th class="titulo2">CNPJ</th>
                      <th class="titulo2">Endereço</th>
                      <th class="titulo2">Número</th>
                      <th class="titulo2">Bairro</th>
                      <th class="titulo2">Cidade</th>
                      <th class="titulo2">Estado</th>
                      <th class="titulo2">País</th>
                      <th class="titulo2">E-mail</th>
                      <th class="titulo2">Telefone</th>
                      <th class="titulo2">Segmento</th>
                      <!-- <th class="titulo2 botao-remover " >Remover</th> -->
                    </tr>
                </thead>

                <tbody>
                      ${model.negociacoes.map(n => {

                        return `
                        <!-- uso da tamplate string - para cada objeto vc cria um lista contendo uma tr - linhas e suas td - colunas-->
                            <tr>
                                <td>${n.codigo}</td>
                                <td>${n.fornecedor}</td>
                                <td>${n.responsavel}</td>
                                <td>${n.cnpj}</td>
                                <td>${n.endereco}</td>
                                <td>${n.numero}</td>
                                <td>${n.bairro}</td>
                                <td>${n.cidade}</td>
                                <td>${n.estado}</td>
                                <td>${n.pais}</td>
                                <td>${n.email}</td>
                                <td>${n.telefone}</td>
                                <td>${n.segmento}</td>

                            </tr>

                        `
                      }).join('')}
                </tbody>

                <tfoot>

                </tfoot>
            </table>
        `;
  }

  update(model){

      this._elemento.innerHTML = this._tempate(model); //pega o elemento do DOM e chama a propriedade innerHtml - converte em elemento do dom (_templete) e passa a ser filho da <div id="negociacoesView"></div> no fornecedores.html



  }

}
