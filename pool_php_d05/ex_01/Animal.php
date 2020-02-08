<?php
class Animal{
	public const MAMMAL=0;
	public const FISH=1;
	public const BIRD=2;
	public $name;
	public $legs;
	public $type;

	function __construct($name, $legs, $type){
		$this->name=$name;
		$this->legs=$legs;
		$this->type=$type;
		switch ($this->type) {
			case '0':
			$this->type="mammal";
				break;
			
			case '1':
			$this->type="fish";
				break;
			case '2':
			$this->type="bird";
				break;
		}
		echo "My name is $this->name and I am a $this->type !\n";
	}
	public function getName(){
		return $this->name;
	}
	public function getLegs(){
		return $this->legs;
	}
	public function getType(){
		return $this->type;
	}
}
?>