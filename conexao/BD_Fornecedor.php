<?php

  //require_pmce("conexao/conexao_msql.php");
  $codigo = $_POST["inputCodigoForn"];
  $fornecedor = $_POST["inputFornecedor"];
  $responsavel = $_POST["inputRespForn"];
  $cnpj = $_POST["inputCnpjForn"];
  $endereco = $_POST["inputEnderecoForn"];
  $numero = $_POST["inputNumeroForn"];
  $bairro = $_POST["inputBairroForn"];
  $cidade = $_POST["inputCidadeForn"];
  $estado = $_POST["inputEstadoForn"];
  $pais = $_POST["inputPaisForn"];
  $email = $_POST["inputEmailForn"];
  $telefone = $_POST["inputFoneForn"];
  $segmento = $_POST["inputSegmentoForn"];

$conexao = mysqli_connect('localhost', 'root', '', 'ra_oficina');

$query_Fornecedor =  "INSERT INTO fornecedores(Codigo, Fornecedor, Responsavel, CNPJ, Endereco, Numero, Bairro, Cidade, Estado, Pais, Email, Telefone, Segmento)
VALUES ('{$codigo}','{$fornecedor}', '{$responsavel}', '{$cnpj}', '{$endereco}', '{$numero}', '{$bairro}', '{$cidade}', '{$estado}', '{$pais}', '{$email}', '{$telefone}', '{$segmento}')";

if (mysqli_query($conexao, $query_Fornecedor)){
	?>
		<p class = "alert-success"> Fornecedor adicionado no BD com sucesso!
	<?php
	} else { 
		?>
			<p class = "alert-danger"> Erro ao inserir o Fornecedor. Favor verificar a conexão e a inserção nos campos!
		<?php
};
mysqli_close($conexao);

?>
				
