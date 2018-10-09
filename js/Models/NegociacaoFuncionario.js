class NegociacaoFuncionario {

    constructor(codigo, funcionario, identidade, cpf, endereco, numero, bairro, cidade, estado, pais, email, telefone, cargo) {


        this._Codigo = codigo; // utilizando o $ como objeto .bind()
        this._Funcionario = funcionario;
        this._Identidade = identidade; // "_" utilizando a convenção de acessar somente dentro do método controllers.
        this._Cpf = cpf;
        this._Endereco = endereco;
        this._Numero = numero;
        this._Bairro = bairro;
        this._Cidade = cidade;
        this._Estado = estado;
        this._Pais = pais;
        this._Email = email;
        this._Telefone = telefone;
        this._Cargo = cargo;

        Object.freeze(this);
    }

    get codigo(){
      return this._Codigo;
    }

    get funcionario() {
        return this._Funcionario;
    }

    get responsavel() {
        return this._Identidade;
    }

    get cnpj() {
        return this._Cpf;
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
        return this._Cargo;
    }
}
