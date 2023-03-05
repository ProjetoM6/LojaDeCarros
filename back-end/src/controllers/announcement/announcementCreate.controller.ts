import { Request, Response } from "express";
import { ICreateAnnouncement } from "../../interfaces/announcement";
import announcementCreateServices from "../../services/announcement/announcementCreateServices";

const announcementCreateController = async (req: Request, res: Response) => {
  const announcementRequest: ICreateAnnouncement = req.body;
  const userId = req.body.decodifiedToken.id;
  const announcementCreated = await announcementCreateServices(
    announcementRequest,
    userId
  );
  return res.status(201).json(announcementCreated);
};

export default announcementCreateController;
