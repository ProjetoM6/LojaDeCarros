import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { ICreateAnnouncement } from "../../interfaces/announcement";

const announcementCreateServices = async (
  announcement: ICreateAnnouncement,
  userId: string
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id: userId });

  if (!user) {
    throw new AppError(404, "user not found");
  }
  const userProps = {
    owner_id: user.id,
    owner_description: user.description,
    owner_name: user.name,
  };
  announcement = { ...announcement, ...userProps };
  const announcementCreate = announcementRepository.create(announcement);
  announcementCreate.user = user;
  await announcementRepository.save(announcementCreate);

  const announcementCreated = await announcementRepository.findOneBy({
    id: announcementCreate.id,
  });

  console.log(announcementCreated);
  return announcementCreated;
};
export default announcementCreateServices;
