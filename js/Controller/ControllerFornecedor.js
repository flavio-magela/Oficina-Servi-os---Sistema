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

  }

  adiciona(event){

    event.preventDefault();
    alert("Ação realizada com sucesso.");

    // let negociacao = new NegociacaoFornecedor{ Ao rodar a página html acusave erro: Informando (Desconhecido ReferenceError: ControllerFornecedor não está definido) - Foi comentado esses código, após isso funcionou.
    let negociacao = new NegociacaoFornecedor(
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

    this._listaNegociacoes.adiciona(negociacao);
    this._limpaFormilario();

    console.log(this._listaNegociacoes.negociacoes);

    //console.log(typeof(this._inputData)); //saber o tipo da variavel (string, number, date, etc..)
    console.log(this._inputCodigo);
    console.log(this._inputFornecedor);
    console.log(this._inputResponsavel);
    console.log(this._inputCnpj);
    console.log(this._inputEndereco);
    console.log(this._inputNumero);
    console.log(this._inputBairro);
    console.log(this._inputCidade);
    console.log(this._inputEstado);
    console.log(this._inputPais);
    console.log(this._inputEmail);
    console.log(this._inputFone);
    console.log(this._inputSegmento);

    // adicionar a negociacao em uma lista
    console.log("Fornecedor: " + this._inputFornecedor.value);
    console.log("Responsavel: " + this._inputResponsavel.value);
    console.log("CNPJ: " + this._inputCnpj.value);
    console.log("Estado: " + this._inputEstado.value);
    console.log("País: " + this._inputPais.value);
  }

  _limpaFormilario(){
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
