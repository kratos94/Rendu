<?php
include_once "AWeapon.php";
class PowerFist extends AWeapon{
	function __construct() {
		parent::__construct("Power First");
	}
	public function attack(){
	echo "SBAM\n";
}
}
?>