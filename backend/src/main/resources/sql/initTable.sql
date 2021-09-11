CREATE TABLE `user`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `password` TEXT NOT NULL,
    `group_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `group`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `group` ADD PRIMARY KEY `group_id_primary`(`id`);
CREATE TABLE `menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `type_id` BIGINT NOT NULL,
    `name` TEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `menu` ADD PRIMARY KEY `menu_id_primary`(`id`);
CREATE TABLE `rating`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `menu_id` BIGINT NOT NULL,
    `score` INT NULL,
    `created_at` TIMESTAMP NOT NULL,
    `deleted_at` TIMESTAMP NULL,
    `id_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `rating` ADD PRIMARY KEY `rating_id_primary`(`id`);
CREATE TABLE `menutype`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` TEXT NOT NULL
);
ALTER TABLE
    `menutype` ADD PRIMARY KEY `menutype_id_primary`(`id`);
ALTER TABLE
    `user` ADD CONSTRAINT `user_group_id_foreign` FOREIGN KEY(`group_id`) REFERENCES `group`(`id`);
ALTER TABLE
    `rating` ADD CONSTRAINT `rating_menu_id_foreign` FOREIGN KEY(`menu_id`) REFERENCES `menu`(`id`);
ALTER TABLE
    `menu` ADD CONSTRAINT `menu_type_id_foreign` FOREIGN KEY(`type_id`) REFERENCES `menutype`(`id`);