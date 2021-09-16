CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` TEXT NOT NULL,
    `name` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `email` TEXT NOT NULL,
    `group_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP DEFAULT NOW,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT NULL
);
CREATE TABLE `group`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT NOW,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT NULL
);
CREATE TABLE `menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type_id` BIGINT NOT NULL,
    `name` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT NOW,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT NULL
);
CREATE TABLE `rating`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `menu_id` BIGINT NOT NULL,
    `score` INT NULL,
    `created_at` TIMESTAMP DEFAULT NOW,
    `deleted_at` TIMESTAMP NULL,
    `id_deleted` TINYINT NULL
);
CREATE TABLE `menutype`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL
);
CREATE TABLE `daily_menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `group_id` INT NOT NULL,
    `time` INT NOT NULL,
    `mainmenu` INT NOT NULL
);