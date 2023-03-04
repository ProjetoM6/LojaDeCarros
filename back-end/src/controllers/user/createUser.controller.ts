import { Request, Response } from "express";
import { ICreateUser } from "../../interfaces/user";
import createUserService from "../../services/user/createUser.services";

const createUserController = async (request: Request, response: Response) => {
  const userRequest: ICreateUser = request.body;

  const userCreated = await createUserService(userRequest);
  return response.status(201).json(userCreated);
};

export default createUserController;
