<?php
include "Character.php";
class Warrior extends Character{
	function __construct(){
		$this->CLASSE="Warrior";
		$this->life="100";
		$this->agility="10";
		$this->strength="8";
		$this->wit="3";
		echo "$this->name: I'll engrave my name in history!\n";
	}
	function attack(){
		echo "$this->name: I'll crush you with my hammer!\n";
	}
	function __destruct(){
		echo "$this->name: Aarrg I can't believe I'm dead...\n";
	}
	function moveRight(){
		echo "$this->name moves right like a bad boy.\n";
	}
	function moveLeft(){
		echo "$this->name moves left like a bad boy.\n";
	}
	function moveDown(){
		echo "$this->name moves down like a bad boy.\n";
	}
	function moveUp(){
		echo "$this->name moves up like a bad boy.\n";
	}
}
?>