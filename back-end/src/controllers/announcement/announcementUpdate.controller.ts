import { Request, Response } from "express";
import announcementUpdateServices from "../../services/announcement/announcementUpdateServices";

const announcementUpdateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcementId: string = req.params.announcementId;
  delete req.body.decodifiedToken;
  const updateData: any = req.body;
  const announcementUpdated = await announcementUpdateServices(
    announcementId,
    updateData
  );
  return res.json(announcementUpdated);
};

export default announcementUpdateController;
