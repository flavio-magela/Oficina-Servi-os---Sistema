var campos_cli = [
  document.querySelector('#inputCodigoCli'),
  document.querySelector('#inputCliente'),
  document.querySelector('#inputRespCli'),
  document.querySelector('#inputCnpjCli'),
  document.querySelector('#inputEnderecoCli'),
  document.querySelector('#inputNumeroCli'),
  document.querySelector('#inputBairroCli'),
  document.querySelector('#inputCidadeCli'),
  document.querySelector('#inputEstadoCli'),
  document.querySelector('#inputPaisCli'),
  document.querySelector('#inputEmailCli'),
  document.querySelector('#inputFoneCli'),
  document.querySelector('#inputSegmentoCli')


];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos_cli.forEach(function(campo) {

       var td = document.createElement('td');
       td.textContent = campo.value;
       tr.appendChild(td);

   });

  tbody.appendChild(tr);

  campos_cli[0].value = 0;
  campos_cli[1].value = '';
  campos_cli[2].value = '';
  campos_cli[3].value = '';
  campos_cli[4].value = '';
  campos_cli[5].value = '';
  campos_cli[6].value = 0;
  campos_cli[7].value = '';
  campos_cli[8].value = '';
  campos_cli[9].value = '';
  campos_cli[10].value = '';
  campos_cli[11].value = '';
  campos_cli[12].value = '';

  campos_cli[0].focus();

});
