var campos = [
  document.querySelector('#inputCodigoForn'),
  document.querySelector('#inputFornecedor'),
  document.querySelector('#inputRespForn'),
  document.querySelector('#inputCnpjForn'),
  document.querySelector('#inputEnderecoForn'),
  document.querySelector('#inputNumeroForn'),
  document.querySelector('#inputBairroForn'),
  document.querySelector('#inputCidadeForn'),
  document.querySelector('#inputEstadoForn'),
  document.querySelector('#inputPaisForn'),
  document.querySelector('#inputEmailForn'),
  document.querySelector('#inputFoneForn'),
  document.querySelector('#inputSegmentoForn')


];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos.forEach(function(campo) {

       var td = document.createElement('td');
       var link = $("<a>").addClass("botao-remover").attr("href","#");
       var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");


       link.append(icone); //colocar o icone dentro da linha como no html
       td.append(link); // colocar a linha dentro da <td> remove igual no gohtml

       td.textContent = campo.value;

       tr.appendChild(td);
   });

  tbody.appendChild(tr);

  campos[0].focus();

});
