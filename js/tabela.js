
$("#btn-salvar").click(mostraTabela);
 $("#botao-sync").click(sincronizatabela);

// Criação da Tabela Fornecedor
function insereTabela(){
  var corpoTabela = $(".tabela").find("tbody");

  var codigo = $("#inputCodigoForn").text(); // insere o tabela da funçao selectize
  console.log(codigo);
  var fornecedor = $("#inputFornecedor").val();
  console.log(fornecedor);
  var responsavel = $("#inputRespForn").val();
  console.log(responsavel);
  var cnpj = $("#inputCnpjForn").val();
  var endereco = $("#inputEnderecoForn").val();
  var numero = $("#inputNumeroForn").val();
  var bairro = $("#inputBairroForn").val();
  var cidade = $("#inputCidadeForn").val();
  var estado = $("#inputEstadoForn").val();
  var pais = $("#inputPaisForn").val();
  var email = $("#inputEmailForn").val();
  var telefone = $("#inputFoneForn").val();
  var segmento = $("#inputSegmentoForn").val();

  console.log("Mostrar o corpoTabela: " + corpoTablea);

  var linha = novaLinha(codigo, fornecedor, responsavel, cnpj, endereco, numero, bairro, cidade, estado, pais, email, telefone, segmento);

  console.log("Mostrar a Linha gerado depois de salvar:" + linha);

  linha.find(".botao-remover").click(removeLinha);
  corpoTabela.prepend(linha);

  $(".tabela").slideDown(500); // ao terminar a digitação mostra o tabela
  scrolltabela();

  //var botaoRemover = "<a href='#'><i class='small material-icons'>delete</i></a>";
  // var linha = "<tr>" +
  //                 "<td>"+ usuario + "</td>"+
  //                 "<td>"+ numPalavras + "</td>"+
  //                 "<td>"+ botaoRemover + "</td>"+
  //             "</tr>";
  //corpoTabela.preppend(linha); //função preppend insere o campo na início da tabela e append insere o campo no final da tabela

}
function scrollTabela(){
  var posicaoTabela = $(".tabela").offset().top; // mostra a qual posição da tela - numeraçao
  $("body").animate(
  {
    scrollTop: posicaoTabela + "px"
  },1000)
}

function novaLinha(codigo, fornecedor, responsavel, cnpj, endereco, numero,bairro, cidade, estado, pais, email, telefone, segmento){
  var linha = $("<tr>");
  var colunaCodigo = $("<td>").text(codigo);
  console.log(colunaCodigo);
  var colunaFornecedores = $("<td>").text(fornecedor);
  console.log(colunaFornecedores);
  var colunaResonsavel = $("<td>").text(responsavel);
  var colunaCnpj = $("<td>").text(cnpj);
  var colunaEndereco = $("<td>").text(endereco);
  var colunaNumero = $("<td>").text(numero);
  var colunaBairro = $("<td>").text(bairro);
  var colunaCidade = $("<td>").text(cidade);
  var colunaEstado = $("<td>").text(estado);
  var colunaPais = $("<td>").text(pais);
  var colunaEmail = $("<td>").text(email);
  var colunaTelefone = $("<td>").text(telefone);
  var colunaSegmento = $("<td>").text(segmento);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href","#");
  var icone = $("<i>").addClass("small").addClass("btn btn-info ml-auto").text("delete");

  link.append(icone); //colocar o icone dentro da linha como no html
  colunaRemover.append(link); // colocar a linha dentro da <td> remove igual no gohtml

  linha.append(colunaCodigo);
  linha.append(colunaFornecedores);
  linha.append(colunaResonsavel);
  linha.append(colunaCnpj);
  linha.append(colunaEndereco);
  linha.append(colunaNumero);
  linha.append(colunaBairro);
  linha.append(colunaCidade);
  linha.append(colunaEstado);
  linha.append(colunaPais);
  linha.append(colunaEmail);
  linha.append(colunaTelefone);
  linha.append(colunaSegmento);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(){
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut(1000); // (this) envolve toda a linha e parent(). parent() sobe duas casas para esmaecer devagar a linha toda Pai e avô.
    setTimeout(function(){
      linha.remove(); // (this) envolve toda a linha e parent(). parent() sobe duas casas para remover a linha toda Pai e avô. Depois de 1 segundo(uso do setTimeout)

    },1000);

}

// $(".botao-remover").click(function(event){
//   event.preventDefault();
//   $(this). parent().parent().remove(); // (this) envolve toda a linha e parent(). parent() sobe duas casas para remover a linha toda Pai e avô.
//
// }); // remove linha mas de forma obsoleta.
function mostraTabela(){
  $(".tabela").stop().slideToggle(800);
  scrollTabela();

}

function sincronizatabela(){
  var tabela = [];
  var linhas = $("tbody>tr"); // cria um tabela com os seu tr e td´s
  linhas.each(function(){
      var codigo = $(this).find("td:nth-child(1)").text(); //mostra o primeiro posição(usuario) do primeiro array na pagina html
      var fornecedor = $(this).find("td:nth-child(2)").text();//mostra o segundo posição(palavra) do primeiro array da pagina html
      var responsavel = $(this).find("td:nth-child(3)").text();
      var cnpj = $(this).find("td:nth-child(4)").text();
      var endereco = $(this).find("td:nth-child(5)").text();
      var numero = $(this).find("td:nth-child(6)").text();
      var bairro = $(this).find("td:nth-child(7)").text();
      var cidade = $(this).find("td:nth-child(8)").text();
      var estado = $(this).find("td:nth-child(9)").text();
      var pais = $(this).find("td:nth-child(10)").text();
      var email = $(this).find("td:nth-child(11)").text();
      var telefone = $(this).find("td:nth-child(12)").text();
      var segmento = $(this).find("td:nth-child(13)").text();


      var score = { //fazer o score(resultado) igual o texto que está no servidor http://.../tabela
        codigo: codigo,
        fornecedor: fornecedores,
        responsavel: responsavel,
        cnpj: cnpj,
        endereco: endereco,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
        pais: pais,
        email: email,
        telefone: telefone,
        segmento: segmento

      };//a cada linha foi salvo um objeto diferente
      tabela.push(score); //coloca dentro do array tabela os valores digitado na página
  }); //igual o for{} de array
  var dados = {  //criação do objeto JavaScript para vincular ao POST
    tabela: tabela
  };
  // $.post("http://localhost:3000/tabela",dados,function(){
  //   console.log("Salvou tabela no servidor!");
  //   $(".tooltip").tooltipster("open").tooltipster("content", "Sucesso ao sincronizar.");
  //   console.log("Sucesso ao sincronizar.");
  // }).fail(function(){
  //   $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar.");
  //   console.log("Falha ao sincronizar");
  //
  // }).always(function(){
  //   setTimeout(function(){
  //     $(".tooltip").tooltipster("close");
  //   },2000);
  // });
}

function atualizaTabela(){
  // $.get("http://localhost:3000/tabela",function(data){
  //   $(data).each(function(){
  //       var linha = novaLinha(this.codigo, this.fornecedor, this.responsavel, this.cnpj, this.endereco, this.numero, this.bairro, this.cidade, this.estado, this.pais, this.email, this.telefone, this.segmento); //usuario e ponnto os nomes dados no tabela do servidor
  //       linha.find(".botao-remover").click(removeLinha);
  //       $("tbody").append(linha); //adiciona/jogar a linha dentro da tabela do html
  //
  //   });
  //
  // });

}
