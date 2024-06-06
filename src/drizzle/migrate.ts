import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const client = postgres(process.env.MAIN_URL! as string, { max: 1 });
// export const db = drizzle(client);

async function main() {
  await migrate(drizzle(client), {
    migrationsFolder: "./src/drizzle/migrations",
  });

  await client.end();
}

main();
