import {
  integer,
  pgEnum,
  pgTable,
  union,
  unique,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
export const UserRole = pgEnum("userRole", ["ADMIN", "BASIC"]);
export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
});

// export const UserTable = pgTable(
//     "user",
//     {
//       id: uuid("id").primaryKey().defaultRandom(),
//       name: varchar("name", { length: 255 }).notNull(),
//       age: integer("age").notNull(),
//       email: varchar("email", { length: 255 }).notNull().unique(),
//       role: UserRole("userRole").default("BASIC").notNull(),
//     },
//     (table) => {
//       return {
//         emailIndex: uniqueIndex("emailIndex").on(table.email),
//         uniqueNameAndAge: unique("uniqueNameAndAge").on(table.name, table.age),
//       };
//     }
//   );
