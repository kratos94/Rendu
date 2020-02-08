<?php
include "IUnit.php";
abstract class AMonster
{	
	private $name;
	private $hp;
	private $ap;
	private $damage;
	private $apcost;
	function __construct()
	{
//		$this->name=$name;
		$this->hp=0;
		$this->ap=0;
		$this->damage=0;
		$this->apcost=0;
	}
	public function moveCloseTo($range){
	throw new Exception("$this->name: I'm too far away from $this->tarname", 1);
		attack();
	}
	public function equip($equip){
		echo "Monsters are proud and fight with their own bodies."
	}

	public function attack($attack){
		
		if ($this->ap > $this->apcost) {
			$this->ap = $this->ap - $this->apcost;
/*			recieveDamage($this->damage){
				echo"$this->name attacks $this->tarname"
			}*/
		}
	}	
/*		throw new Exception("Error in AMonster. Parameter is not a IUnit", 1);
	}*/
	public function getApcost(){
		return $this->apcost;
	}
	public function getDamage(){
		return $this->damage;
	}
	public function getNAme(){
		return $this->name;
	}

	public function getHp(){
		return $this->hp;
	}

	public function getAp(){
		return $this->ap;
	}
}
?>