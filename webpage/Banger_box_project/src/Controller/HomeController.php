<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
	public function home_view(){
		return $this->render('home.html.twig', array("user" => ["Pol", "JM", "Irvin", "Remi", "Danel"]));
	}
}
?>