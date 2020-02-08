<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class UserController extends AbstractController
{
    /**
     * @Route("/user", name="user")
     */
    public function user_view()
    {
		$repository = $this->getDoctrine()->getRepository(User::class);
		$user_list = $repository->findAll();
		return $this->render('user\index.html.twig', ["user" => $user_list, ]);
    }
}
