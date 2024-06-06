import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import * as schema from "./schema";

const client = postgres(process.env.MAIN_URL! as string);
export const db = drizzle(client, { schema, logger: true });

// async function main() {
//   await migrate(drizzle(client), {
//     migrationsFolder: "./src/drizzle/migrations",
//   });

//   await client.end();
// }

// main();
