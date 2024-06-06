const { userService } = require("../../services");
const { StatusCodes } = require("http-status-codes");
import express, { Application, Request, Response } from "express";

async function createuser(req: Request, res: Response) {
  try {
    const { name } = req.query;
    const user = await userService.createUser({
      name,
    });

    // successresponce.data = user;u

    return res.status(StatusCodes.CREATED).json(user);
  } catch (error) {
    // errorresponce.error = error;
    // return res.status(error.statusCode).json(errorresponce);
    throw error;
  }
}

module.exports = {
  createuser,
};
