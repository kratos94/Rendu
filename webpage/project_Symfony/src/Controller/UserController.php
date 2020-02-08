<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\User;

class UserController extends AbstractController
{
	public function user_view(){
		$repository = $this->getDoctrine()->getRepository(User::class);
		$user_list = $repository->findAll();
		return $this->render('user.html.twig', array("user" => $user_list));
	}
}
?>