<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FavoritesController extends AbstractController
{
	public function favorites_view(){
		return $this->render('home.html.twig', array("user" => ["nipples", "dick", "fuck", "teta", "sexy"]));
	}
}
?>