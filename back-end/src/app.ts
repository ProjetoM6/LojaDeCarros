import express from "express";
import "reflect-metadata";
import userRoutes from "./routes/user/user.routes";
import loginRoutes from "./routes/login/login.routes";

const app = express();

app.use(express.json());

app.use("/user", userRoutes);
app.use("/user/login", loginRoutes);

app.listen(3331, () => {
  console.log("Server running");
});
export default app;
