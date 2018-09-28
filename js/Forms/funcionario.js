var campos_func = [
  document.querySelector('#inputCodigoFunc'),
  document.querySelector('#inputFuncionario'),
  document.querySelector('#inputIdentFunc'),
  document.querySelector('#inputCpfFunc'),
  document.querySelector('#inputEnderecoFunc'),
  document.querySelector('#inputNumeroFunc'),
  document.querySelector('#inputBairroFunc'),
  document.querySelector('#inputCidadeFunc'),
  document.querySelector('#inputEstadoFunc'),
  document.querySelector('#inputPaisFunc'),
  document.querySelector('#inputEmailFunc'),
  document.querySelector('#inputFoneFunc'),
  document.querySelector('#inputCargoFunc')


];
var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

   event.preventDefault();

   var tr = document.createElement('tr');

   campos_func.forEach(function(campo) {

     var td = document.createElement('td');
     td.textContent = campo.value;
     tr.appendChild(td);
   });

  tbody.appendChild(tr);

  campos_func[0].value = 0;
  campos_func[1].value = '';
  campos_func[2].value = '';
  campos_func[3].value = '';
  campos_func[4].value = '';
  campos_func[5].value = '';
  campos_func[6].value = 0;
  campos_func[7].value = '';
  campos_func[8].value = '';
  campos_func[9].value = '';
  campos_func[10].value = '';
  campos_func[11].value = '';
  campos_func[12].value = '';

  campos_func[0].focus();

});
