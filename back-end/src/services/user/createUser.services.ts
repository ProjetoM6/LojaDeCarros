import bcrypt from "bcrypt";
import AppDataSource from "../../data-source";
import { Address } from "../../entities/adress.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { ICreateUser } from "../../interfaces/user";

const createUserService = async ({
  name,
  email,
  cpf,
  phone,
  date_of_birth,
  description,
  type,
  password,
  cep,
  city,
  complement,
  number,
  state,
  street,
}: ICreateUser) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const emailAlreadyExists = await userRepository.findOneBy({ email: email });

  if (emailAlreadyExists) {
    throw new AppError(400, "User already exists");
  }

  const address = addressRepository.create({
    cep,
    city,
    complement,
    number,
    state,
    street,
  });

  addressRepository.save(address);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.phone = phone;
  user.createdAt = Date();
  user.cpf = cpf;
  user.date_of_birth = date_of_birth;
  user.description = description;
  user.type = type;
  user.address = address;

  await userRepository.save(user);

  return user;
};

export default createUserService;
