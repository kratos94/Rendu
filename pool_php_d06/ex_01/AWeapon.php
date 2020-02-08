<?php
abstract class AWeapon{
	private $name;
	private $apcost;
	private $damage;
	private $melee=false;

	function __construct($name, $apcost, $damage){
		if(gettype($name)!= "string" || gettype($apcost)!="integer" || gettype($damage)!="integer" || gettype($melee)!="boolean"){
		throw new Exception('Error in AWeapon constructor. Bad parameters.');
  		}
  		$this->name=$name;
  		$this->apcost=$apcost;
  		$this->damage=$damage;
  		$this->melee=$melee;

  		// INIT ATTRIBUTOS

	}
	public function getName(){			
		return $this->name;
		}
	public function getApcost(){
		return $this->apcost;
		}
	public function getDamage(){
		return $this->damage;
		}
	public function isMelee(){
		return $this->melee;
		}
	 abstract public function attack();
}
?>