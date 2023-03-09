import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

const annunciantProfileServices = async (annunciantId: string) => {
  const annunciantRepository = AppDataSource.getRepository(User);
  const annunciant = await annunciantRepository.findOneBy({ id: annunciantId });
  if (!annunciant) {
    throw new AppError(400, "User already exists");
  }

  return annunciant;
};
export default annunciantProfileServices;
