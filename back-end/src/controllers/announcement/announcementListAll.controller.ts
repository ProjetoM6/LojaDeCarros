import { Request, Response } from "express";
import announcementListAllServices from "../../services/announcement/announcementListAllServices";

const announcementListAllController = async (req: Request, res: Response) => {
  const allAnnouncement = await announcementListAllServices();
  return res.json(allAnnouncement);
};

export default announcementListAllController;
