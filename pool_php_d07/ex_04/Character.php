<?php
class Character{
	protected $name;
	protected $life;
	protected $agility;
	protected $strenght;
	const CLASSE="Character";

	function __construct($name){
		$this->name=$name;
		$this->life=50;
		$this->agility=2;
		$this->strenght=2;
		$this->wit=2;
	}
	function getLife(){
		return $this->life;
	}
	function getAgility(){
		return $this->life;
	}
	function getStrength(){
		return $this->strenght;
	}
	function getWit(){
		return $this->Wit;
	}
	function getCLASSE(){
		return $this->CLASSE;
	}
	function moveRight(){
		echo "$this->name moves right.\n";
	}
	function moveLeft(){
		echo "$this->name moves left.\n";
	}
	function moveDown(){
		echo "$this->name moves down.\n";
	}
	function moveUp(){
		echo "$this->name moves up.\n";
	}
}
?>