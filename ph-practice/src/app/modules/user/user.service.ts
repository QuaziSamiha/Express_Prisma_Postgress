import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";

const app: Application = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Welcome to PH Health Care Server",
  });
});
