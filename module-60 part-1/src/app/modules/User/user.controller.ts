import type { Request, Response } from "express";
import { userServive } from "./user.service.js";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userServive.createAdmin(req.body);
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error)?.name || "Internal Server Error",
      //   message: (error as Error)?.message || "Internal Server Error",
      error: error,
    });
  }
};

export const userController = {
  createAdmin,
};

// ? =============== v3 ===============
// const createAdmin = async (req: Request, res: Response) => {
//   const result = await userServive.createAdmin(req.body);
//   res.status(200).json({
//     success: true,
//     message: "Admin created successfully",
//     data: result,
//   });
// };

// export const userController = {
//   createAdmin,
// };

// ? =============== v2 ===============
// const createAdmin = async (req: Request, res: Response) => {
//   const result = await userServive.createAdmin(req.body);
//   res.send(result);
// };

// export const userController = {
//   createAdmin,
// };

// ? =============== v1 ===============
// const createAdmin = async (req: Request, res: Response) => {
//   console.log("user controller", req.body);
//   const result = await userServive.createAdmin();
//   res.send(result);
// };

// export const userController = {
//   createAdmin,
// };
