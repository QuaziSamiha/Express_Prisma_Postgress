import type { Request, Response } from "express";
import { adminService } from "./admin.service.js";

const getAllFromDB = async (req: Request, res: Response) => {
  const result = await adminService.getAllFromDB();
  res.status(200).json({
    success: true,
    message: "All admin data retrieved successfully",
    data: result,
  });
};

const getBySearchFromDB = async (req: Request, res: Response) => {
  //   console.log(req.query);
  try {
    const result = await adminService.getBySearchFromDB(req.query);
    res.status(200).json({
      success: true,
      message: "Searched admin data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error)?.name || "Internal Server Error",
      error: error,
    });
  }
};

export const AdminController = {
  getAllFromDB,
  getBySearchFromDB,
};

// ? =============== v3 ===============
// const getAllFromDB = async (req: Request, res: Response) => {
//   const result = await adminService.getAllFromDB();
//   res.status(200).json({
//     success: true,
//     message: "All admin data retrieved successfully",
//     data: result,
//   });
// };

// const getBySearchFromDB = async (req: Request, res: Response) => {
//   //   console.log(req.query);
//   const result = await adminService.getBySearchFromDB(req.query);
//   res.status(200).json({
//     success: true,
//     message: "All admin data retrieved successfully",
//     data: result,
//   });
// };

// export const AdminController = {
//   getAllFromDB,
//   getBySearchFromDB,
// };

// ? =============== v2 ===============
// const getAllFromDB = async (req: Request, res: Response) => {
//   const result = await adminService.getAllFromDB();
//   res.status(200).json({
//     success: true,
//     message: "All admin data retrieved successfully",
//     data: result,
//   });
// };

// export const AdminController = {
//   getAllFromDB,
// };

// ? =============== v1 ===============
// const prisma = new PrismaClient();

// const getAllFromDB = async (req: Request, res: Response) => {
//   const result = await prisma.admin.findMany();
//   res.status(200).json({
//     success: true,
//     message: "All admin data retrieved successfully",
//     data: result,
//   });
// };

// export const AdminController = {
//   getAllFromDB,
// };
