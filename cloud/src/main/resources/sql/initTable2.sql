CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `group_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Group`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Score`(
    Menu.id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `score` INT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `Menu_type`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `daily_menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY,
    `group_id` INT NOT NULL,
    `time` TIME NOT NULL,
    `mainmenu` INT NOT NULL
);
CREATE TABLE `Used_ingredient`(
    `Menu`.`id` BIGINT NOT NULL,
    `Ingredient_data`.`id` BIGINT NOT NULL
);
CREATE TABLE `Rating`(
    `User`.`id` BIGINT NOT NULL,
    `Menu`.`id` BIGINT NOT NULL,
    `Rating_data`.`id` TINYINT NOT NULL
);
CREATE TABLE `Rating_data`(
    `id` TINYINT NOT NULL PRIMARY,
    `name` VARCHAR(255) NOT NULL COMMENT 'worst, bad, soso, good, best'
);

CREATE TABLE `Ingredient_data`(
    `id` BIGINT NOT NULL PRIMARY,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `User` ADD CONSTRAINT `user_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `Group`(`id`);
ALTER TABLE
    `Menu` ADD CONSTRAINT `menu_menu_type_id_foreign` FOREIGN KEY(`Menu_type`.`id`) REFERENCES `Menu_type`(`id`);