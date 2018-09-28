class NegociacaoCliente {

    constructor(codigo, cliente, responsavel, cnpj_cpf, endereco, numero, bairro, cidade, estado, pais, email, telefone, segmento) {


        this._Codigo = codigo; // utilizando o $ como objeto .bind()
        this._Cliente = cliente;
        this._Responsavel = responsavel; // "_" utilizando a convenção de acessar somente dentro do método controllers.
        this._Cnpj_Cpf = cnpj_cpf;
        this._Endereco = endereco;
        this._Numero = numero;
        this._Bairro = bairro;
        this._Cidade = cidade;
        this._Estado = estado;
        this._Pais = pais;
        this._Email = email;
        this._Telefone = telefone;
        this._Segmento = segmento;

        Object.freeze(this);
    }

    get codigo(){
      return this._Codigo;
    }

    get fornecedor() {
        return this._Fornecedor;
    }

    get responsavel() {
        return this._Responsavel;
    }

    get cnpj() {
        return this._Cnpj_Cpf;
    }
    get endereco(){
        return this._Endereco;
    }

    get numero() {
        return this._Numero;
    }

    get bairro() {
        return this._Bairro;
    }
    get cidade() {
        return this._Cidade;
    }

    get estado() {
        return this._Estado;
    }
    get pais(){
        return this._Pais;
    }

    get email() {
        return this._Email;
    }

    get telefone() {
        return this._Telefone;
    }

    get segmento() {
        return this._Segmento;
    }
}
