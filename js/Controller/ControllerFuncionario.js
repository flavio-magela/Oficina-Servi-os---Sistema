class ControllerFuncionario{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this._inputCodigo = $('#inputCodigoFunc'); // utilizando o $ como objeto .bind()
    this._inputFuncionario = $('#inputFuncionario');
    this._inputIdentidade = $('#inputIdentFunc'); // "_" utilizando a convenção de acessar somente dentro do método controllers.
    this._inputCpf = $('#inputCpfFunc');
    this._inputEndereco = $('#inputEnderecoFunc');
    this._inputNumero = $('#inputNumeroFunc');
    this._inputBairro = $('#inputBairroFunc');
    this._inputCidade = $('#inputCidadeFunc');
    this._inputEstado = $('#inputEstadoFunc');
    this._inputPais = $('#inputPaisFunc');
    this._inputEmail = $('#inputEmailFunc');
    this._inputFone = $('#inputFoneFunc');
    this._inputSegmento = $('#inputSegmentoFunc');
    this._inputRemover = $('botao-remover');

  }

  adiciona(event){

    event.preventDefault();
    alert("Ação realizada com sucesso.");



    // let negociacao = new NegociacaoFuncionario{ Ao rodar a página html acusave erro: Informando (Desconhecido ReferenceError: ControllerFornecedor não está definido) - Foi comentado esses código, após isso funcionou.
    //
    //   this._inputCodigo.value,
    //   this._inputFuncionario.value,
    //   this._inputIdentidade.value,
    //   this._inputCpf.value,
    //   this._inputEndereco.value,
    //   this._inputNumero.value,
    //   this._inputBairro.value,
    //   this._inputCidade.value,
    //   this._inputEstado.value,
    //   this._inputPais.value,
    //   this._inputEmail.value,
    //   this._inputFone.value,
    //   this._inputSegmento.value
    // };
    // //console.log(typeof(this._inputData)); //saber o tipo da variavel (string, number, date, etc..)
    console.log(this._inputCodigo);
    console.log(this._inputFuncionario);
    console.log(this._inputIdentidade);
    console.log(this._inputCpf);
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
    console.log("Funcionario: " + this._inputFuncionario.value);
    console.log("Identidade: " + this._inputIdentidade.value);
    console.log("CPF: " + this._inputCpf.value);
    console.log("Estado: " + this._inputEstado.value);
    console.log("País: " + this._inputPais.value);
  }

}
