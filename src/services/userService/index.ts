const { StatusCodes } = require("http-status-codes");
import { eq } from "drizzle-orm";
import { db } from "../../drizzle/db";
import { UserTable } from "../../drizzle/schema";
const { application } = require("express");

async function createUser(data: any) {
  try {
    const users = await db
      .insert(UserTable)
      .values({
        name: `${data.name}`,
      })
      .returning();

    return users;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
};
