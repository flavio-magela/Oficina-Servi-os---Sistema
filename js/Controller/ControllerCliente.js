class ControllerCliente{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this._inputCodigo = $('#inputCodigoCli'); // utilizando o $ como objeto .bind()
    this._inputCliente = $('#inputCliente');
    this._inputResponsavel = $('#inputRespCli'); // "_" utilizando a convenção de acessar somente dentro do método controllers.
    this._inputCnpj_Cpf = $('#inputCnpjCli');
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
    this._listaNegociacoes = new ListaNegociacoes_Cliente();
    this._negociacoesView = new NegociacoesView_Cliente($('#negociacoesView')); // será instanciada a tabela html que estna na negociacoesView
    this._negociacoesView.update(this._listaNegociacoes); // atualiza a tabela no clientees.html e recebe a lista this._listaNegociacoes (new ListaNegociacoes_cliente)

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

        return new NegociacaoCliente( //cria uma negociação
          this._inputCodigo.value,
          this._inputCliente.value,
          this._inputResponsavel.value,
          this._inputCnpj_Cpf.value,
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
    this._inputCliente.value ='';
    this._inputResponsavel.value='';
    this._inputCnpj_Cpf.value = '';
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
