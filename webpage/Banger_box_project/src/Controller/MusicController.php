<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Music;

class MusicController extends AbstractController
{
    /**
     * @Route("/music", name="music")
     */
    public function music_view()
    {
		$repository = $this->getDoctrine()->getRepository(Music::class);
		$music_list = $repository->findAll();
		return $this->render('music\index.html.twig', array("music" => $music_list));
    }
}
