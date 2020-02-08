<?php

$servername = "localhost";
$username = "root";
$password = "Kakaroto1994";


if (3 > strlen($_POST['name']) || strlen($_POST['name'])> 10){
	$errors = "Invalid name <br>";
	echo "Error en " . $_POST["name"]." es igual a : " . $errors;
}
if (!(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))) {
	$errors = "Invalid email <br>";
	echo "Error es igual a : " . $errors;
}
if (3 > strlen($_POST['password']) || 10 < strlen($_POST['password']) || $_POST['password'] != $_POST['confirmpass']){
	$errors = "Invalid password or confirmation <br>";
	echo "Error es igual a : " . $errors;
}
if(empty($errors)){
	$pass=password_hash($_POST['password'], PASSWORD_DEFAULT);
	try {
    $conn = new PDO("mysql:host=$servername;dbname=gecko", $username, $password);
    $sql= "insert into users VALUES (NULL," . $conn->quote($_POST['name']) . " ," . $conn->quote($_POST['email']) . " ," . $conn->quote($pass) . ", CURDATE(), 0);";
	echo $sql;
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully <br>";
    $conn->exec("use gecko");
	$conn->query($sql);
    echo "user created <br>";
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }
}


?>
<!DOCTYPE html>
<html>
<head>
	<title>Registration Database</title>
</head>
<body>
	<form action="" method="post">
		<input type="text" name="name" placeholder="name"><br>
		<input type="text" name="email" placeholder="email"><br>
		<input type="password" name="password" placeholder="enter password"><br>
		<input type="password" name="confirmpass" placeholder="confirm your password"><br>
		<input type="submit" name="submit">
	</form>
</body>
</html>
<?php

?>
