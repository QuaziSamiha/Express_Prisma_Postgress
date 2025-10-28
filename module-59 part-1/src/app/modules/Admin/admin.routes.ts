import express from "express";
import { AdminController } from "./admin.controller.js";

const router = express.Router();

router.get("/", AdminController.getAllFromDB);
router.get("/searched", AdminController.getBySearchFromDB);

export const AdminRoutes = router;

// ? =============== v1 ===============
// const router = express.Router();

// const prisma = new PrismaClient();

// router.get("/", async (req: Request, res: Response) => {
//   const result = await prisma.admin.findMany();
//   res.status(200).json({
//     success: true,
//     message: "All admin data retrieved successfully",
//     data: result,
//   });
// });

// export const AdminRoutes = router;
