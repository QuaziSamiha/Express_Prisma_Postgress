import type { Request, Response } from "express";
import { userServive } from "./user.service.js";

const createAdmin = async (req: Request, res: Response) => {
  const result = await userServive.createAdmin(req.body);
  res.send(result);
};

export const userController = {
  createAdmin,
};

// ? =============== v1 ===============
// const createAdmin = async (req: Request, res: Response) => {
//   console.log("user controller", req.body);
//   const result = await userServive.createAdmin();
//   res.send(result);
// };

// export const userController = {
//   createAdmin,
// };
