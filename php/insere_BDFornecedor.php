<?php
  include ("conexao/conexao_msql.php");
  $codigo =$_POST[inputCodigoForn];
  $fornecedor =$_POST[inputFornecedor];
  $responsavel =$_POST[inputRespForn];
  $cnpj =$_POST[inputCnpjForn];
  $endereco =$_POST[inputEnderecoForn];
  $numero =$_POST[inputNumeroForn];
  $bairro =$_POST[inputBairroForn];
  $cidade =$_POST[inputCidadeForn];
  $estado =$_POST[inputEstadoForn];
  $pais =$_POST[inputPaisForn];
  $email =$_POST[inputEmailForn];
  $telefone =$_POST[inputFoneForn];
  $segmento =$_POST[inputSegmentoForn];

.$insere_fornecedor =  "INSERT INTO fornecedores(Codigo, Fornecedor, Responsavel, CNPJ, Endereco, Numero, Bairro, Cidade, Estado, Pais, Email, Telefone, Segmento)
VALUES ('$codigo', '$fornecedor', '$responsavel', '$cnpj', '$endereco', '$numero', '$bairro', '$cidade', '$estado', '$pais', '$email', '$telefone', '$segmento')";


echo "Codigo: " .$codigo "<br/> Fornecedor: ".$fornecedor "<br/> Responsável: ".$responsavel "<br/> CNPJ: ".$cnpj "<br/> Endereço: ".$endereco "<br/> Numero: ".$numero "<br/> Bairro: ".$bairro "<br/> Cidade: ".$cidade "<br/> Estado: ".$estado "<br/> País: ".$pais "<br/> Email: ".$email "<br/> Telefone: ".$telefone "<br/> Segmento: ".$segmento "<br/> ";

echo "Inserção no Banco de dados: " .$insere_fornecedor;

$resultado_fornecedor = mysqli_query($conn, $insere_fornecedor)

  if($resultado_fornecedor  -> connect_errno){

			echo "Falha na conexão: (".$conn -> connect_errno.")".$conn -> connect_error;
  } else{
			echo "Conexão realizada com Sucesso!!!"
		}

?>
