import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/.env" });

const app: Express = express();

app.listen(process.env.PORT, () => {
  console.log(`⚡️[server]: Listening on port ${process.env.PORT}`);
});
