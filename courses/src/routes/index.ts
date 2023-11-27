import { PrismaClient } from "@prisma/client";
import express, { type Request, type Response } from "express";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/api/courses", async (req: Request, res: Response) => {
  const courses = await prisma.course.findMany();

  res.send(courses);
});

export { router as indexCourseRouter };
