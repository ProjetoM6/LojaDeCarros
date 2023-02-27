import bcrypt from "bcrypt";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const createUserService = async ({
  name,
  email,
  cpf,
  phone,
  data_of_birth,
  type,
  password,
}: any) => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlreadyExists = await userRepository.findOneBy({ email: email });

  if (emailAlreadyExists) {
    throw new Error("User already exists");
  }

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.phone = phone;
  user.createdAt = Date();
  user.cpf = cpf;
  user.date_of_birth = data_of_birth;
  user.type = type;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
