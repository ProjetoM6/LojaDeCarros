import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

const announcementDeleteServices = async (
  announcementId: string
): Promise<void> => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcement = await announcementRepository.findOneBy({
    id: announcementId,
  });
  if (!announcement) {
    throw new AppError(404, "announcement not found");
  }
  await announcementRepository.delete({ id: announcementId });
  return;
};

export default announcementDeleteServices;
