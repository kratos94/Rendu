<?php
include_once "AWeapon.php";
abstract class ASpaceMarine implements AWeapon
{	
	private $name;
	private $hp;
	private $ap;
	function __construct()
	{
		$this->name=$name;
		$this->hp=0;
		$this->ap=0;
		
	}
	function getNAme(){
		return $this->name;
	}

	function getHp(){
		return $this->hp;
	}

	function getAp(){
		return $this->ap;
	}
}
?>