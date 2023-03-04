import { Router } from "express";
import announcementCreateController from "../../controllers/announcement/announcementCreate.controller";
import { authUser } from "../../middlewares/authUser.middleware";
const router = Router();

router.post("/announcement", authUser, announcementCreateController);

export default router;
