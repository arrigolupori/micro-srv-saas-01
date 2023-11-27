import express, { type Request, type Response } from "express";
import { indexCourseRouter } from "./routes";
import { NotFoundError } from "@sagewillcom/common";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ hello: "World!" });
});

app.use(indexCourseRouter);

app.all("*", async (req: Request, res: Response) => {
  throw new NotFoundError();
});

export default app;
