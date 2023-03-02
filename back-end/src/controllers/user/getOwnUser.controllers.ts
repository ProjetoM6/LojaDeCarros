import { Request, Response } from "express";
import getOwnUserService from "../../services/user/getOwnUser.services";

const getOwnUserController = async (request: Request, response: Response) => {
  const id = request.body.decodifiedToken.id;

  const users = await getOwnUserService(id);
  return response.status(200).json(users);
};

export default getOwnUserController;
