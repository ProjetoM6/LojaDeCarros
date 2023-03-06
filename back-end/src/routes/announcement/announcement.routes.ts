import { Router } from "express";
import announcementCreateController from "../../controllers/announcement/announcementCreate.controller";
import announcementListAllController from "../../controllers/announcement/announcementListAll.controller";
import announcementDeleteController from "../../controllers/announcement/announcementDelete.controller";
import announcementUpdateController from "../../controllers/announcement/announcementUpdate.controller";
import { authUser } from "../../middlewares/authUser.middleware";
const router = Router();

router.post("/announcement", authUser, announcementCreateController);
router.get("/announcement", announcementListAllController);
router.delete(
  "/announcement/:announcementId",
  authUser,
  announcementDeleteController
);
router.patch(
  "/announcement/:announcementId",
  authUser,
  announcementUpdateController
);

export default router;
