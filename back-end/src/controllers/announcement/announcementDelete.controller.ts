import { Request, Response } from "express";
import announcementDeleteServices from "../../services/announcement/announcementDeleteServices";
const announcementDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementId: string = req.params.announcementId;

  const deleted: void = await announcementDeleteServices(announcementId);
  return res.status(201).json("deleted");
};

export default announcementDeleteController;
