import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const account = users.find((user) => user.id === id);
  if (!account) {
    throw new AppError(400, "User not found");
  }

  await userRepository.delete(id);

  return true;
};

export default deleteUserService;
