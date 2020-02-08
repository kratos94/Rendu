<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MusicRepository")
 */
class Music
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $Date_added;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $Author;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $base;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateAdded(): ?\DateTimeInterface
    {
        return $this->Date_added;
    }

    public function setDateAdded(\DateTimeInterface $Date_added): self
    {
        $this->Date_added = $Date_added;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->Author;
    }

    public function setAuthor(?string $Author): self
    {
        $this->Author = $Author;

        return $this;
    }

    public function getBase(): ?string
    {
        return $this->base;
    }

    public function setBase(?string $base): self
    {
        $this->base = $base;

        return $this;
    }
}
