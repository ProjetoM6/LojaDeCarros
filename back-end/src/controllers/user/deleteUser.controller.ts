import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.services";

const userDeleteController = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await deleteUserService(id);

  return response.status(204).json({ message: "User deleted with sucess" });
};

export default userDeleteController;
