class ListaNegociacoes_Fornecedor{

  constructor(){

    this.negociacoes = []

  }

  adiciona(negociacao){

    this._negociacoes.push(negociacao);

  }
  get negociacoes(){

    return this._negociacoes;

  }

}
