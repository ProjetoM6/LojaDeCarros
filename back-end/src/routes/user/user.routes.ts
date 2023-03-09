import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import userDeleteController from "../../controllers/user/deleteUser.controller";
import getOwnUserController from "../../controllers/user/getOwnUser.controllers";
import listUsersController from "../../controllers/user/listUsers.controllers";
import annunciantProfileController from "../../controllers/user/annunciantProfile.controllers";
import resetUserPasswordController from "../../controllers/user/resetUserPassword.controller";
import sendResetUserPasswordController from "../../controllers/user/sendResetUserPassword.controller";
import updateUserController from "../../controllers/user/updateUser.controllers";
import { authUser } from "../../middlewares/authUser.middleware";

const router = Router();

router.post("", createUserController);
router.post("/sendResetPassword", sendResetUserPasswordController);
router.get("", listUsersController);
router.get("/annunciant/profile/:id", annunciantProfileController);
router.get("/profile", authUser, getOwnUserController);
router.patch("/:id", authUser, updateUserController);
router.patch("/resetPassword/newPassword", resetUserPasswordController);
router.delete("/:id", authUser, userDeleteController);
export default router;
