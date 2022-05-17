import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import "./config/db";
import userRoutes from "./routes/user.routes";
import cookieParser from "cookie-parser";

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//Routes
app.use("/api/user", userRoutes);
//server
app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Listening on port ${process.env.PORT}`);
});
