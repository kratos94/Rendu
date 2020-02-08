<?php
class Pony{
	public $gender;
	public $name;
	public $color;
	function __construct($gender, $name, $color){
		$this->gender=$gender;
		$this->name=$name;
		$this->color=$color;
	}
	public function __toString(){
		return "Don’t worry, I’m a pony!\n";
	}
	function __destruct(){
		echo "I'm a dead pony.\n";
	}
}
$poney = new Pony(1, 2, 3);
echo $poney;
?>