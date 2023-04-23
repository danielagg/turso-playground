CREATE TABLE `cities` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`country_id` integer,
	FOREIGN KEY (`country_id`) REFERENCES `countries`(`id`)
);

CREATE TABLE `countries` (
	`id` integer PRIMARY KEY NOT NULL,
	`iso_code` text NOT NULL,
	`name` text NOT NULL
);

CREATE UNIQUE INDEX `isoCodeIdx` ON `countries` (`iso_code`);