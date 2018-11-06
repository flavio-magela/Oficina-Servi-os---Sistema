<?php

	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "ra_oficina";

	//Criar a conexão
	$con = mysqli_connect($servidor, $usuario, $senha);
	$bd = mysqli_select_db("ra_oficina", $con)

	//if($conn -> connect_errno){
		//	echo "Falha na conexão: (".$conn -> connect_errno.")".$conn -> connect_error;
		//} else{
			//echo "Conexão realizada com Sucesso!!!"
		//}

		if(!$con ){
			die ("Não foi possível conectar ao Banco de Dados. " .mysqli_error());
		} else{
			die ("Conexão realizada com Sucesso!!!");

		}

	mysqli_query("SET NAME 'utf8");
	mysqli_query('SET character_set_conection=utf8');
	mysqli_query('SET character_set_client=utf8');
	mysqli_query('SET character_set_results=utf8');


?>
