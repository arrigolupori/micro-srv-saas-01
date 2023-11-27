import app from "../app";
import request from "supertest";

it("should have property hello", async () => {
  const response = await request(app).get("/");
  expect(response.body).toHaveProperty("hello");
});

it("should return response body", async () => {
  const response = await request(app).get("/api/courses");
  expect(response.body).toBeDefined;
});