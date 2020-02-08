<?php
include_once "Character.php";
class Mage extends Character{
	function __construct(){
		$this->CLASSE="Mage";
		$this->life="70";
		$this->agility="10";
		$this->strength="3";
		$this->wit="10";
		echo "$this->name: May the gods be with me!\n";
	}
	function attack(){
		echo "$this->name: Feel the power of my magic!\n";
	}
	function __destruct(){
		echo "$this->name: By the four gods, i passed away...\n";
	}
		function moveRight(){
		echo "$this->name moves right furtively.\n";
	}
	function moveLeft(){
		echo "$this->name moves left furtively.\n";
	}
	function moveDown(){
		echo "$this->name moves down furtively.\n";
	}
	function moveUp(){
		echo "$this->name moves up furtively.\n";
	}
}
?>