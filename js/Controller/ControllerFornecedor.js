class ControllerFornecedor{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this._inputCodigo = $('#inputCodigoForn'); // utilizando o $ como objeto .bind()
    this._inputFornecedor = $('#inputFornecedor');
    this._inputResponsavel = $('#inputRespForn'); // "_" utilizando a convenção de acessar somente dentro do método controllers.
    this._inputCnpj = $('#inputCnpjForn');
    this._inputEndereco = $('#inputEnderecoForn');
    this._inputNumero = $('#inputNumeroForn');
    this._inputBairro = $('#inputBairroForn');
    this._inputCidade = $('#inputCidadeForn');
    this._inputEstado = $('#inputEstadoForn');
    this._inputPais = $('#inputPaisForn');
    this._inputEmail = $('#inputEmailForn');
    this._inputFone = $('#inputFoneForn');
    this._inputSegmento = $('#inputSegmentoForn');
    //this._inputRemover = $('botao-remover');

    this._listaNegociacoes = new ListaNegociacoes_Fornecedor();
    this._negociacoesView = new NegociacoesView($('#negociacoesView')); // será instanciada a tabela html que estna na negociacoesView
    this._negociacoesView.update(this._listaNegociacoes); // atualiza a tabela no fornecedores.html e recebe a lista this._listaNegociacoes (new ListaNegociacoes_Fornecedor)

  }

  adiciona(event){

    event.preventDefault();

    alert("Ação realizada com sucesso.");

    this._listaNegociacoes.adiciona(this._criaNegociacao()); //lista encapsulada a negocições
    this._negociacoesView.update(this._listaNegociacoes); // apos a função adiciona vc faz o update da minha _listaNegociacoes
    this._limpaFormulario(); //limpa o Formulário

    console.log( this._listaNegociacoes.negociacoes);

  }
  _criaNegociacao(){ //metodo auxiliar  cria negociacao

        return new NegociacaoFornecedor( //cria uma negociação
          this._inputCodigo.value,
          this._inputFornecedor.value,
          this._inputResponsavel.value,
          this._inputCnpj.value,
          this._inputEndereco.value,
          this._inputNumero.value,
          this._inputBairro.value,
          this._inputCidade.value,
          this._inputEstado.value,
          this._inputPais.value,
          this._inputEmail.value,
          this._inputFone.value,
          this._inputSegmento.value
        );
  }

  _limpaFormulario(){  //methodo auxiliar limpa Formulário
    this._inputCodigo.value =0;
    this._inputFornecedor.value ='';
    this._inputResponsavel.value='';
    this._inputCnpj.value = '';
    this._inputEndereco.value ='';
    this._inputNumero.value =0;
    this._inputBairro.value ='';
    this._inputCidade.value = '';
    this._inputEstado.value ='';
    this._inputPais.value ='';
    this._inputEmail.value ='';
    this._inputFone.value ='';
    this._inputSegmento.value ='';

    this._inputCodigo.focus();

  }

}
