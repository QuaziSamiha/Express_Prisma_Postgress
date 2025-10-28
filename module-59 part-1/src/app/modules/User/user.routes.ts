import express from "express";
import { userController } from "./user.controller.js";

const router = express.Router();

router.post("/", userController.createAdmin);
// router.get("/", userController.createAdmin);

export const userRoutes = router;

//? ============== v1 ================
// import express from "express";

// const router = express.Router();

// router.get("/", (req, res) => {
//   res.send({
//     message: "User route is working",
//   });
// });

// export const userRoutes = router;
