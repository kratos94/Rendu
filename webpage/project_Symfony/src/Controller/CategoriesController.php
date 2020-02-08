<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Categories;

class CategoriesController extends AbstractController
{
	public function categories_view(){
		$repository = $this->getDoctrine()->getRepository(Categories::class);
		$categories_list = $repository->findAll();
		return $this->render('categories.html.twig', array("category" => $categories_list));
	}
}
?>