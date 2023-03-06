import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";
import { AppError } from "../../errors/appError";

const announcementUpdateServices = async (
  announcementId: string,
  updateData: any
) => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const announcement = announcementRepository.findOneBy({ id: announcementId });
  if (!announcement) {
    throw new AppError(404, "Announcement not found");
  }
  await announcementRepository.update(
    { id: announcementId },
    { ...updateData }
  );
  const announcementUpdated = await announcementRepository.findOneBy({
    id: announcementId,
  });
  return announcementUpdated!;
};
export default announcementUpdateServices;
