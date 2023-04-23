import { InferModel } from "drizzle-orm";
import {
  sqliteTable,
  text,
  integer,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const countries = sqliteTable(
  "countries",
  {
    id: integer("id").primaryKey(),
    iso_code: text("iso_code").notNull(),
    name: text("name").notNull(),
  },
  (countries) => ({
    isoCodeIdx: uniqueIndex("isoCodeIdx").on(countries.iso_code),
  })
);

export type Country = InferModel<typeof countries>;
