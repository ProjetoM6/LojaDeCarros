import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { User } from "../../entities/user.entity";
import { ILogin } from "../../interfaces/login";

const loginService = async ({ email, password }: ILogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ email });
  if (!user) {
    throw new AppError(403, "Wrong email/password");
  }
  const passwordMatch: boolean = await compare(password, user.password);
  if (!passwordMatch) {
    throw new AppError(403, "Wrong email/password");
  }
  const token: string = jwt.sign(
    {
      email: user.email,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );
  return token;
};

export default loginService;
