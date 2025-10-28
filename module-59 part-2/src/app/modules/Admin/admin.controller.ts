import type { Request, Response } from "express";
import { adminService } from "./admin.service.js";
import pick from "../../../shared/pick.js";
import { adminFilterableFields } from "./admin.constant.js";

const getAllFromDB = async (req: Request, res: Response) => {
  //   console.log(req.query);
  try {
    const filters = pick(req.query, adminFilterableFields);
    const result = await adminService.getAllFromDB(
      filters as { searchTerm: string }
    );
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
};

// ? ====================== V5 =================
// const pick = <T extends Record<string, unknown>, k extends keyof T>(
//   obj: T,
//   keys: k[]
// ): Partial<T> => {
//   const finalObj: Partial<T> = {};
//   console.log(obj, keys);
//   for (const key of keys) {
//     if (obj && Object.hasOwnProperty.call(obj, key)) {
//       //   console.log(key);
//       finalObj[key] = obj[key];
//     }
//   }

//   //   console.log(finalObj);
//   return finalObj;
// };

// const getAllFromDB = async (req: Request, res: Response) => {
//   //   console.log(req.query);
//   try {
//     const filters = pick(req.query, [
//       "name",
//       "email",
//       "searchTerm",
//       "contactNumber",
//     ]);

//     const result = await adminService.getAllFromDB(
//       filters as { searchTerm: string }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Searched admin data retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: (error as Error)?.name || "Internal Server Error",
//       error: error,
//     });
//   }
// };

// export const AdminController = {
//   getAllFromDB,
// };

// ? ====================== V5 =================
// const pick = (obj, keys) => {
//   const finalObj = {};
//   console.log(obj, keys);
//   for (const key of keys) {
//     if (obj && Object.hasOwnProperty.call(obj, key)) {
//       //   console.log(key);
//       finalObj[key] = obj[key];
//     }
//   }

//   //   console.log(finalObj);
//   return finalObj;
// };
// const getAllFromDB = async (req: Request, res: Response) => {
//   //   console.log(req.query);
//   try {
//     pick(req.query, ["name", "email", "searchTerm", "contactNumber"]);
//     const filters = req.query;
//     const result = await adminService.getAllFromDB(
//       filters as { searchTerm: string }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Searched admin data retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: (error as Error)?.name || "Internal Server Error",
//       error: error,
//     });
//   }
// };

// export const AdminController = {
//   getAllFromDB,
// };

// ? ================= V4 ===================
// const getAllFromDB = async (req: Request, res: Response) => {
//   //   console.log(req.query);
//   try {
//     const filters = req.query;
//     const result = await adminService.getAllFromDB(
//       filters as { searchTerm: string }
//     );
//     res.status(200).json({
//       success: true,
//       message: "Searched admin data retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: (error as Error)?.name || "Internal Server Error",
//       error: error,
//     });
//   }
// };

// export const AdminController = {
//   getAllFromDB,
// };

// ? =============== V3 (ANY FIELD CAN BE FILTERED - OPTIMIZED) ===============

// const getAllFromDB = async (req: Request, res: Response) => {
//   //   console.log(req.query);
//   try {
//     const result = await adminService.getAllFromDB(req.query);
//     res.status(200).json({
//       success: true,
//       message: "Searched admin data retrieved successfully",
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: (error as Error)?.name || "Internal Server Error",
//       error: error,
//     });
//   }
// };

// export const AdminController = {
//   getAllFromDB,
// };

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
