CREATE TABLE `blogio_content` (
  `id` INT NOT NULL,
  `blogio_postId` VARCHAR(255) NULL,
  `blogio_title` TEXT NULL,
  `blogio_content` TEXT NULL DEFAULT '1',
  PRIMARY KEY (`id`));
