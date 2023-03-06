import AppDataSource from "../../data-source";
import { Announcement } from "../../entities/announcement.entity";

const announcementListAllServices = async () => {
  const announcementRepository = AppDataSource.getRepository(Announcement);
  const allAnnouncement = await announcementRepository.find();
  return allAnnouncement;
};

export default announcementListAllServices;
