<?php
class Animal{
	public const MAMMAL=0;
	public const FISH=1;
	public const BIRD=2;
	public static $nmbAnimals=0;
	public $name;
	public $legs;
	public $type;
	public static $nmbMammals=0;
	public static $nmbBirds=0;
	public static $nmbFishes=0;

	function __construct($name, $legs, $type){
		$this->name=$name;
		$this->legs=$legs;
		$this->type=$type;
		switch ($this->type) {
			case '0':
			$this->type="mammal";
			self::$nmbMammals++;
				break;
			
			case '1':
			$this->type="fish";
			self::$nmbFishes++;
				break;
			case '2':
			$this->type="bird";
			self::$nmbBirds++;
				break;
		}
		self::$nmbAnimals++;
	}
	static function getNumberOfAnimalsAlive(){
		if(self::$nmbAnimals == 1) {
		echo "There is currently ". self::$nmbAnimals . "  animal alive in our world\n";
		}
		else {
			echo "There are currently ". self::$nmbAnimals . " animals alive in our world\n";
		}
		return self::$nmbAnimals;
	}
	static function getNumberOfMammals(){
		if(self::$nmbMammals == 1) {
		echo "There is currently ". self::$nmbMammals . " mamal alive in our world\n";
		}
		else {
			echo "There are currently ". self::$nmbAnimals. " mamals alive in our world\n";
		}
	}
	static function getNumberOfFishes(){
		if(self::$nmbFishes == 1) {
		echo "There is currently ". self::$nmbFishes . " fish alive in our world\n";
		}
		else {
			echo "There are currently self::$nmbFishes fishes alive in our world\n";
		}
	}
	static function getNumberOfBirds(){
		if(self::$nmbBirds == 1) {
		echo "There is currently ". self::$nmbBirds . " bird alive in our world\n";
		}
		else {
		echo "There are currently ". self::$nmbBirds ." birds alive in our world\n";
		}
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
	function __destruct(){
		self::$nmbAnimals--;
		self::$nmbFishes--;
		self::$nmbBirds--;
		self::$nmbMammals--;
	}
}
?>