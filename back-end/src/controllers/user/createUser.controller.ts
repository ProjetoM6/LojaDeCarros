import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.services";

const createUserController = async (request: Request, response: Response) => {
  const { name, email, cpf, phone, date_of_birth, type, password } =
    request.body;

  const user = await createUserService({
    name,
    email,
    cpf,
    phone,
    date_of_birth,
    type,
    password,
  });
  return response.status(201).json(user);
};

export default createUserController;
