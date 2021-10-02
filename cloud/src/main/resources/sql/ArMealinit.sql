CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `login_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `group_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
CREATE TABLE `Group`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
CREATE TABLE `Menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `group_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `menu_type` INT NOT NULL,
    `score` DOUBLE NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);

CREATE TABLE `Daily_meal`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date_value` DATE NOT NULL,
    `time` INT NOT NULL,
    `group_id` BIGINT NOT NULL,
    `menu` BIGINT NOT NULL
);
CREATE TABLE `Used_ingredient`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `Menu_id` BIGINT NULL,
    `Ingredient_id` BIGINT NOT NULL,
    `Self_id` BIGINT NULL
);
CREATE TABLE `Rating`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `group_id` BIGINT NOT NULL,
    `User_id` BIGINT NOT NULL,
    `Target_id` BIGINT NOT NULL,
    `Target_type` INT NOT NULL,
    `rating_data` INT NOT NULL,
    `bad_reason` INT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
CREATE TABLE `Ingredient`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);
CREATE TABLE `SelfDish`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `group_id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `date_value` DATE NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `Rating` ADD CONSTRAINT `rating_user_id_foreign` FOREIGN KEY(`User_id`) REFERENCES `User`(`id`);
ALTER TABLE
    `User` ADD CONSTRAINT `user_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `Group`(`id`);
ALTER TABLE
    `Daily_meal` ADD CONSTRAINT `daily_meal_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `Group`(`id`);
ALTER TABLE
    `Daily_meal` ADD CONSTRAINT `daily_meal_menu_foreign` FOREIGN KEY(`menu`) REFERENCES `Menu`(`id`);
ALTER TABLE
    `Used_ingredient` ADD CONSTRAINT `used_ingredient_menu_id_foreign` FOREIGN KEY(`Menu_id`) REFERENCES `Menu`(`id`);
ALTER TABLE
    `Used_ingredient` ADD CONSTRAINT `used_ingredient_ingredient_data_id_foreign` FOREIGN KEY(`Ingredient_data_id`) REFERENCES `Ingredient_data`(`id`);
ALTER TABLE
    `Rating` ADD CONSTRAINT `rating_menu_id_foreign` FOREIGN KEY(`Target_id`) REFERENCES `Menu`(`id`);