class ListaNegociacoes_Funcionario{

  constructor(){

    this._negociacoes = [];

  }

  adiciona(negociacao){

    this._negociacoes.push(negociacao); //metodo para ter acesso a lista de negocições

  }
  get negociacoes(){

    return [].concat(this._negociacoes); //listar as negociações - return [] passa uma copia da _listaNegociacoes (blindar a lista)

  }

}
