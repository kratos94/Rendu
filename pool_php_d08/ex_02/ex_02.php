<?php
public $password;
public $salt;
public $hash;
public function my_password_salt(){
	$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $salt = '';
    for ($i = 0; $i < $length; $i++) {
        $salt .= $characters[rand(0, $charactersLength - 1)];
    }
    return $salt;
}
public function my_password_hash($password){
	$hash=md5($password[$this->salt]);
}
public function my_password_verify($password, $salt, $hash){
	if (md5($password[$this->salt])=$hash){
		return TRUE;
	}
	else 
		return FALSE;
}
?>