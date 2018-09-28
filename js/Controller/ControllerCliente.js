class ControllerCliente{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this._inputCodigo = $('#inputCodigoCli'); // utilizando o $ como objeto .bind()
    this._inputCliente = $('#inputCliente');
    this._inputResponsavel = $('#inputRespCli'); // "_" utilizando a convenção de acessar somente dentro do método controllers.
    this._inputCnpj = $('#inputCnpjCli');
    this._inputEndereco = $('#inputEnderecoCli');
    this._inputNumero = $('#inputNumeroCli');
    this._inputBairro = $('#inputBairroCli');
    this._inputCidade = $('#inputCidadeCli');
    this._inputEstado = $('#inputEstadoCli');
    this._inputPais = $('#inputPaisCli');
    this._inputEmail = $('#inputEmailCli');
    this._inputFone = $('#inputFoneCli');
    this._inputSegmento = $('#inputSegmentoCli');
    //this._inputRemover = $('botao-remover');

  }

  adiciona(event){

    event.preventDefault();
    alert("Ação realizada com sucesso.");

    //console.log(typeof(this._inputData)); //saber o tipo da variavel (string, number, date, etc..)
    // let negociacao = new NegociacaoFornecedor{ Ao rodar a página html acusave erro: Informando (Desconhecido ReferenceError: ControllerFornecedor não está definido) - Foi comentado esses código, após isso funcionou.
    //
    //     console.log(this._inputCodigo);
    //     console.log(this._inputCliente);
    //     console.log(this._inputResponsavel);
    //     console.log(this._inputCnpj);
    //     console.log(this._inputEndereco);
    //     console.log(this._inputNumero);
    //     console.log(this._inputBairro);
    //     console.log(this._inputCidade);
    //     console.log(this._inputEstado);
    //     console.log(this._inputPais);
    //     console.log(this._inputEmail);
    //     console.log(this._inputFone);
    //     console.log(this._inputSegmento);
    //
    // };
    console.log(this._inputCodigo);
    console.log(this._inputCliente);
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
    console.log("Cliente: " + this._inputCliente.value);
    console.log("Responsavel: " + this._inputResponsavel.value);
    console.log("CNPJ: " + this._inputCnpj.value);
    console.log("Estado: " + this._inputEstado.value);
    console.log("País: " + this._inputPais.value);
  }

}
