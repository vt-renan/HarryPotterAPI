<?php

namespace App\Services;

use App\Repository\CharacterRepository;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

class PotterDexService
{
    public function getCharacters(int $offset, CharacterRepository $characterRepository): array
    {
        $characters = $characterRepository->findBy([],null, 4, $offset);
        $response=[];
        foreach ($characters as $character){
            $response[] = [
                'id' => $character->getId(),
                'firstName' => $character->getFirstName(),
                'lastName' => $character->getLastName(),
                'house' => $character->getHouse(),
                'birthDate' => $character->getBirthdate(),
                'picture' => $character->getPicture()
            ];
        }
        return $response;
    }
}