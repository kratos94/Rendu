<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Movies;


class MoviesController extends AbstractController
{
	public function movies_view(){
		$repository = $this->getDoctrine()->getRepository(Movies::class);
		$movies_list = $repository->findAll();
		return $this->render('movies.html.twig', array("movie" => $movies_list));
	}
}
?>