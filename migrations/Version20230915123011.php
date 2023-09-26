<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230915123011 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE character_spell (character_id INT NOT NULL, spell_id INT NOT NULL, INDEX IDX_2EFC2AEF1136BE75 (character_id), INDEX IDX_2EFC2AEF479EC90D (spell_id), PRIMARY KEY(character_id, spell_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE character_spell ADD CONSTRAINT FK_2EFC2AEF1136BE75 FOREIGN KEY (character_id) REFERENCES `character` (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE character_spell ADD CONSTRAINT FK_2EFC2AEF479EC90D FOREIGN KEY (spell_id) REFERENCES `spell` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE character_spell DROP FOREIGN KEY FK_2EFC2AEF1136BE75');
        $this->addSql('ALTER TABLE character_spell DROP FOREIGN KEY FK_2EFC2AEF479EC90D');
        $this->addSql('DROP TABLE character_spell');
    }
}
