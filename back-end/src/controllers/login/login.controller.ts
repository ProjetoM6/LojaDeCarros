import { Request, Response } from "express";
import { ILogin } from "../../interfaces/login";
import loginService from "../../services/login/login.services";

const loginController = async (req: Request, res: Response) => {
  const user: ILogin = req.body;
  const token: string = await loginService(user);
  return res.json({ token });
};

export default loginController;
