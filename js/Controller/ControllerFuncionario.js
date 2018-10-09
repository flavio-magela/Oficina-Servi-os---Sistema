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
    this._inputCargo = $('#inputCargoFunc');
    //this._inputRemover = $('botao-remover');

    this._listaNegociacoes = new ListaNegociacoes_Funcionario();
    this._negociacoesView = new NegociacoesView_Funcionario($('#negociacoesView')); // será instanciada a tabela html que estna na negociacoesView
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

        return new NegociacaoFuncionario( //cria uma negociação
          this._inputCodigo.value,
          this._inputFuncionario.value,
          this._inputIdentidade.value,
          this._inputCpf.value,
          this._inputEndereco.value,
          this._inputNumero.value,
          this._inputBairro.value,
          this._inputCidade.value,
          this._inputEstado.value,
          this._inputPais.value,
          this._inputEmail.value,
          this._inputFone.value,
          this._inputCargo.value
        );
  }

  _limpaFormulario(){  //methodo auxiliar limpa Formulário
    this._inputCodigo.value =0;
    this._inputFuncionario.value ='';
    this._inputIdentidade.value=0;
    this._inputCpf.value = 0;
    this._inputEndereco.value ='';
    this._inputNumero.value =0;
    this._inputBairro.value ='';
    this._inputCidade.value = '';
    this._inputEstado.value ='';
    this._inputPais.value ='';
    this._inputEmail.value ='';
    this._inputFone.value ='';
    this._inputCargo.value ='';

    this._inputCodigo.focus();

  }

  }
