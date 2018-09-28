var campos_forn = [
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

document.querySelector('form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos_forn.forEach(function(campo) {

       var td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);
   });


  tbody.appendChild(tr);

  campos_forn[0].value = 0;
  campos_forn[1].value = '';
  campos_forn[2].value = '';
  campos_forn[3].value = '';
  campos_forn[4].value = '';
  campos_forn[5].value = '';
  campos_forn[6].value = 0;
  campos_forn[7].value = '';
  campos_forn[8].value = '';
  campos_forn[9].value = '';
  campos_forn[10].value = '';
  campos_forn[11].value = '';
  campos_forn[12].value = '';

  campos_forn[0].focus();

});
