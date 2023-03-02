import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.services";

const updateUserController = async (request: Request, response: Response) => {
  const { phone, name, email, password, cpf, date_of_birth, type } =
    request.body;
  const dataBody = request.body;
  const { id } = request.params;
  const token = request.headers.authorization?.split(" ")[1];
  id;

  if (dataBody.id != undefined) {
    return response
      .status(401)
      .json({ message: "You can't change this attributes" });
  }

  const updatedUser = await updateUserService(
    name,
    email,
    password,
    phone,
    cpf,
    date_of_birth,
    type,
    id,
    token
  );
  return response.status(200).json(updatedUser);
};

export default updateUserController;
