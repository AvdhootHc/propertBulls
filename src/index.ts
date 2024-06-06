import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import { eq } from "drizzle-orm";
import { db } from "./drizzle/db";
import { UserTable } from "./drizzle/schema";

const userRoutes = require("./routes/userRoutes");

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.use("/api", userRoutes);

// app.post("/user", async (req: Request, res: Response) => {
//   const { name } = req.query;

//   if (!name) {
//     return res.status(400).json({ error: "Name is required" });
//   }

//   try {
//     const users = await db
//       .insert(UserTable)
//       .values({
//         name: `${name}`,
//       })
//       .returning();

//     res.status(201).json({ message: "User created successfully", user: users });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

app.get("/userdata", async (req: Request, res: Response) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const users = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.name, `${name}`));

    res.status(201).json({ message: "search completed", user: users });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.patch("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);

  if (!id) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const users = await db
      .update(UserTable)
      .set({
        name: "tanmay waghole ",
      })
      .where(eq(UserTable.id, `${id}`))
      .returning();

    res.status(201).json({ message: "updation completed", user: users });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Name is required" });
  }

  try {
    const users = await db
      .delete(UserTable)
      .where(eq(UserTable.id, `${id}`))
      .returning();

    res.status(201).json({ message: "deletion completed", user: users });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// async function main() {
// create operation
//------------------------------------------------------------------------------------------------------------------------
// const users = await db
//   .insert(UserTable)
//   .values({
//     name: "sam bahadur",
//   })
//   .returning();
// console.log("user crraeted sucesfully", users);
//-----------------------------------------------------------------------------------------------------------------------
// select operation
// const user = await db.query.UserTable.findFirst();
// console.log("connected", user);
//-------------------------------------------------------------------------------------------------------------------------
//update operation
// const users = await db
//   .update(UserTable)
//   .set({
//     name: "tanmay waghole ",
//   })
//   .where(eq(UserTable.id, "f685953a-feb8-4970-abab-122ed70cf38b"))
//   .returning();
// console.log("user updated", users);
//------------------------------------------------------------------------------------------------------------------------
//delete operation
// const users = await db
//   .delete(UserTable)
//   .where(eq(UserTable.id, "7573bb9b-a534-4654-8ec5-6a0de087d2df")).re;
// console.log("user deleted sucessfully");
//------------------------------------------------------------------------------------------------------------------------
//select
//   const users = await db
//     .select()
//     .from(UserTable)
//     .where(eq(UserTable.name, "waghole"));
//   console.log(users);
// }

// main();
