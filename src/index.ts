import express, { Application } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import rootRouter from "./routes";
import bodyParser from "body-parser";
import multer from "multer";

const app: Application = express();
const port: number = parseInt(process.env.PORT as string, 10) || 5000;
const prisma = new PrismaClient();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////http://localhost:3000/api/auth/login
// redirect to routes/index.ts
app.use("/api", rootRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
