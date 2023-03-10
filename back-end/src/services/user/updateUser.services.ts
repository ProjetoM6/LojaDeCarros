import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

import { hash } from "bcrypt";

import { AppError } from "../../errors/appError";

const updateUserService = async (
  name: string,
  email: string,
  password: string,
  phone: string,
  cpf: string,
  date_of_birth: string,
  type: string,
  id: string
) => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id,
  });
  if (!findUser) {
    throw new AppError(400, "User not found");
  }

  await userRepository.update(id, {
    name: name ? name : findUser.name,
    email: email ? email : findUser.email,
    password: password ? await hash(password, 10) : findUser.password,
    phone: phone ? phone : findUser.phone,
    createdAt: findUser.createdAt,
    cpf: cpf ? cpf : findUser.cpf,
    date_of_birth: date_of_birth ? date_of_birth : findUser.date_of_birth,
    type: type ? type : findUser.type,
    id: findUser.id,
  });

  const user = await userRepository.findOneBy({ id });

  return user!;
};

export default updateUserService;
