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
	function getStrenght(){
		return $this->strenght;
	}
	function getWit(){
		return $this->Wit;
	}
	function getCLASSE(){
		return $this->CLASSE;
	}
}
?>