<?php
interface IUnit
{
	public function equip($equip);
	public function attack($attack);
	public function recieveDamage($damage);
	public function moveCloseTo($range);
	public function recoverAP();
}
?>