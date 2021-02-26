CREATE TABLE `blogio_posts` (
  `id` INT NOT NULL,
  `blogio_postId` VARCHAR(255) NULL,
  `blogio_date` VARCHAR(255) NULL,
  `blogio_active` VARCHAR(1) NULL DEFAULT '1',
  PRIMARY KEY (`id`));
