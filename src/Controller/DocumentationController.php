<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/documentation')]
class DocumentationController extends AbstractController
{
    #[Route('/', name: 'documentation_show')]
    public function show()
    {
        return $this->render('documentation/documentation.html.twig', []);
    }
}
