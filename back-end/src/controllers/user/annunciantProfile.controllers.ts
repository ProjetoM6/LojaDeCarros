import { Request, Response } from "express";
import annunciantProfileServices from "../../services/annunciant/annunciantProfile.services";

const annunciantProfileController = async (req: Request, res: Response) => {
  const annunciantId = req.params.id;
  const annunciant = await annunciantProfileServices(annunciantId);
  return res.json(annunciant);
};

export default annunciantProfileController;
