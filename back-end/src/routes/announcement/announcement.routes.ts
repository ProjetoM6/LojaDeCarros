import { Router } from "express";
import announcementCreateController from "../../controllers/announcement/announcementCreate.controller";
import announcementDeleteController from "../../controllers/announcement/announcementDelete.controller";
import { authUser } from "../../middlewares/authUser.middleware";
const router = Router();

router.post("/announcement", authUser, announcementCreateController);
router.delete(
  "/announcement/:announcementId",
  authUser,
  announcementDeleteController
);

export default router;
