<?php
header('Content-Type: application/jason');
print_r($_POST);
try {
	$db = new PDO('mysql:host=localhost;dbname=AJAX;charset=UTF 8', "root", "wololo")
	$sql = "INSTERT INTO todo (name, status) VALUES ('".$_POST['task']."', '0');";
	$db->exec($sql);
	$result = array(
		"result" => "OK"
	);
	echo json_encode($result);
}
catch{  PDO exception $exception

}
?>