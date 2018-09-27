<?php

	$servidor = "localhost";
	$usuario = "root";
	$senha = "";
	$dbname = "contato";

	//Criar a conexão
	$con = mysql_connect($servidor, $usuario, $senha);
	$bd = mysql_select_db("ra_oficina", $con)

	//if($conn -> connect_errno){
		//	echo "Falha na conexão: (".$conn -> connect_errno.")".$conn -> connect_error;
		//} else{
			//echo "Conexão realizada com Sucesso!!!"
		//}

		if(!$con ){
			die ("Não foi possível conectar ao Banco de Dados. " .mysql_error());
		} else{
			die ("Conexão realizada com Sucesso!!!");

		}

	mysql_query("SET NAME 'utf8");
	mysql_query('SET character_set_conection=utf8');
	mysql_query('SET character_set_client=utf8');
	mysql_query('SET character_set_results=utf8');


?>
