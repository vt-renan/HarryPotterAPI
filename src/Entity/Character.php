<?php

namespace App\Entity;


use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use App\Controller\CharacterController;
use App\Repository\CharacterRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: CharacterRepository::class)]
#[ORM\Table(name: '`character`')]

#[ApiResource(
    operations: [
        new Get(
            uriTemplate: '/{id}',
            requirements: ['id' => '\d+']
        ),
        new GetCollection(
            uriTemplate: '/'
        )
    ],
    routePrefix: '/character',
    normalizationContext: ["groups" => ["character_read"]]
)]
#[ApiFilter(SearchFilter::class, properties: ['firstName' => 'partial', 'lastName' => 'partial', 'genre' => 'exact' ,'blood' => 'exact', "house" => "exact"])]
class Character
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(["character_read"])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(["character_read"])]
    private ?string $firstName = null;

    #[ORM\Column(length: 255)]
    #[Groups(["character_read"])]
    private ?string $lastName = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["character_read"])]
    private ?string $picture = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["character_read"])]
    private ?string $genre = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["character_read"])]
    private ?string $blood = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(["character_read"])]
    private ?string $house = null;

    #[ORM\Column]
    #[Groups(["character_read"])]
    private ?bool $alive = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(["character_read"])]
    private ?\DateTimeInterface $birthdate = null;

    #[ORM\ManyToMany(targetEntity: Spell::class, inversedBy: 'characters')]
    #[Groups(["character_read"])]
    private Collection $spells;

    public function __construct()
    {
        $this->spells = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): static
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): static
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): static
    {
        $this->picture = $picture;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(?\DateTimeInterface $birthdate): void
    {
        $this->birthdate = $birthdate;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(?string $genre): static
    {
        $this->genre = $genre;

        return $this;
    }

    public function getBlood(): ?string
    {
        return $this->blood;
    }

    public function setBlood(?string $blood): static
    {
        $this->blood = $blood;

        return $this;
    }

    public function getHouse(): ?string
    {
        return $this->house;
    }

    public function setHouse(?string $house): static
    {
        $this->house = $house;

        return $this;
    }

    public function isAlive(): ?bool
    {
        return $this->alive;
    }

    public function setAlive(bool $alive): static
    {
        $this->alive = $alive;

        return $this;
    }

    /**
     * @return Collection<int, Spell>
     */
    public function getSpells(): Collection
    {
        return $this->spells;
    }

    public function addSpell(Spell $spell): static
    {
        if (!$this->spells->contains($spell)) {
            $this->spells->add($spell);
        }

        return $this;
    }

    public function removeSpell(Spell $spell): static
    {
        $this->spells->removeElement($spell);

        return $this;
    }
}
