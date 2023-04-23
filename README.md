## Turso

A database was created under name 'sandbox', then populated:

```
create table countries (
id integer primary key,
name varchar (255) not null,
iso_code varchar (2) not null
);

insert into countries(name, iso_code) values ('Spain', 'ES');
insert into countries(name, iso_code) values ('Hungary', 'HU');
insert into countries(name, iso_code) values ('Ukraine', 'UA');
```

## Deploy to Vercel

1. Get Database URL: `turso db show sandbox --url` (env var: NUXT_TURSO_DB_URL)
2. Get non-exiring token: `turso db tokens create sandbox -e none` (env var: NUXT_TURSO_DB_AUTH_TOKEN)

## Migrations

npx drizzle-kit generate:sqlite
