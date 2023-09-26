<?php

namespace App\Controller;

use App\Entity\Character;
use App\Repository\CharacterRepository;
use App\Services\PotterDexService;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/potterDex')]
class PotterDexController extends AbstractController
{

    public function __construct(private CharacterRepository $characterRepository, private PotterDexService $potterDexService)
    {
    }

    /**
     * @throws NonUniqueResultException
     * @throws NoResultException
     */
    #[Route('/', name: 'potterDex_show')]
    public function show()
    {
        return $this->render('potterDex/potter_dex.html.twig', ['characters' => $this->characterRepository->findBy([], ['id' => 'ASC'], 4) , 'total' => $this->characterRepository->findTotal()]);
    }

    #[Route('/show_more/{offset}', name: 'show_more')]
    public function showMore(int $offset) {
        return new JsonResponse($this->potterDexService->getCharacters($offset, $this->characterRepository));
    }

    #[Route('/character/{id}', name: 'show_character')]
    public function showCharacter(Character $character) {
        return $this->render('potterDex/potter_dex_character.html.twig', ['character' => $character]);
    }
}