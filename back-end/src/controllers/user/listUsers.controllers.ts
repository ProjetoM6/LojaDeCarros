import { Request, Response } from "express";
import listUserService from "../../services/user/listUsers.services";
const listUsersController = async (request: Request, response: Response) => {
  const users = await listUserService();
  return response.status(200).json(users);
};
export default listUsersController;
