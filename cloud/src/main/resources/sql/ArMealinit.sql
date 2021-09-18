CREATE TABLE `User`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `login_id` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `password` CHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `group_id` BIGINT NOT NULL,
    `created_at` TIMESTAMP NOT NULL COMMENT 'default NOW();',
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `User` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `Group`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP NOT NULL COMMENT 'default NOW();',
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `Group` ADD PRIMARY KEY `group_id_primary`(`id`);
CREATE TABLE `Menu`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `menu_type` TINYINT NOT NULL COMMENT '1. 메인메뉴(mainmenu)
2. 자율메뉴(selfmenu)
3. 후식(dessert)',
    `score` INT NULL,
    `created_at` TIMESTAMP NOT NULL COMMENT 'default NOW();',
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
ALTER TABLE
    `Menu` ADD PRIMARY KEY `menu_id_primary`(`id`);
CREATE TABLE `Daily_meal`(
    `date` DATE NOT NULL,
    `time` TINYINT NOT NULL COMMENT '1. 조식
2. 중식
3. 석식',
    `group_id` BIGINT NOT NULL,
    `menu` BIGINT NOT NULL
);
ALTER TABLE
    `Daily_meal` ADD PRIMARY KEY `daily_meal_date_primary`(`date`);
ALTER TABLE
    `Daily_meal` ADD PRIMARY KEY `daily_meal_time_primary`(`time`);
CREATE TABLE `Used_ingredient`(
    `Menu_id` BIGINT NOT NULL,
    `Ingredient_data_id` BIGINT NOT NULL
);
CREATE TABLE `Rating`(
    `User_id` BIGINT NOT NULL,
    `Menu_id` BIGINT NOT NULL,
    `rating_data` TINYINT NOT NULL COMMENT '1. worst
2. bad
3. soso
4. good
5. best',
    `created_at` TIMESTAMP NOT NULL COMMENT 'default NOW();',
    `deleted_at` TIMESTAMP NULL,
    `is_deleted` TINYINT(1) NULL
);
CREATE TABLE `Ingredient_data`(
    `id` BIGINT NOT NULL,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `Ingredient_data` ADD PRIMARY KEY `ingredient_data_id_primary`(`id`);
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
    `Rating` ADD CONSTRAINT `rating_menu_id_foreign` FOREIGN KEY(`Menu_id`) REFERENCES `Menu`(`id`);