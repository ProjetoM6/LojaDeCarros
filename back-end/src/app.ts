import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import userRoutes from "./routes/user/user.routes";
import loginRoutes from "./routes/login/login.routes";
import { AppError } from "./errors/appError";

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/user/login", loginRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }
  console.error(err);
  return response
    .status(500)
    .json({ status: "error", message: "Internal server error" });
});
export default app;
