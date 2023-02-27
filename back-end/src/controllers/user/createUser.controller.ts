import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.services";

const createUserController = async (request: Request, response: Response) => {
  const { name, email, cpf, phone, data_of_birth, type, password } =
    request.body;

  try {
    const user = await createUserService({
      name,
      email,
      cpf,
      phone,
      data_of_birth,
      type,
      password,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response
        .status(400)
        .send({ error: error.name, message: error.message });
    }
  }
};

export default createUserController;
