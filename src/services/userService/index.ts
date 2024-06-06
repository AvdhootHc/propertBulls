const { StatusCodes } = require("http-status-codes");
const { eq } = require("drizzle-orm");
const { db } = require("../../drizzle/db");
const { UserTable } = require(".././../drizzle/schema");
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
