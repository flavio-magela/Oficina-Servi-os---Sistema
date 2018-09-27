var campos = [
  document.querySelector('#inputCodigoForn'),
  document.querySelector('#inputFornecedor'),
  document.querySelector('#inputRespForn')
  document.querySelector('#inputCnpjForn'),
  document.querySelector('#inputEnderecoForn'),
  document.querySelector('#inputNumeroForn')
  document.querySelector('#inputBairroForn'),
  document.querySelector('#inputCidadeForn'),
  document.querySelector('#inputEstadoForn')
  document.querySelector('#inputPaisForn'),
  document.querySelector('#inputEmailForn'),
  document.querySelector('#inputFoneForn')
  document.querySelector('#inputSegmentoForn'),

];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos.forEach(function(campo) {

       var td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);
   });

  // var tdVolume = document.createElement('td');
  // tdVolume.textContent = campos[1].value * campos[2].value;

  //tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  // campos[0].value = '';
  // campos[1].value = 1;
  // campos[2].value = 0;

  campos[0].focus();

});
