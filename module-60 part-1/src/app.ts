import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";
import { userRoutes } from "./app/modules/User/user.routes.js";
import { AdminRoutes } from "./app/modules/Admin/admin.routes.js";
const app: Application = express();
app.use(cors());

// ? ========== parsers ==============
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Welcome to PH Health Care Server",
  });
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/admin", AdminRoutes);

export default app;
