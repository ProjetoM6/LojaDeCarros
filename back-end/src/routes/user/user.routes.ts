import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import userDeleteController from "../../controllers/user/deleteUser.controller";
import getOwnUserController from "../../controllers/user/getOwnUser.controllers";
import listUsersController from "../../controllers/user/listUsers.controllers";
import resetUserPasswordController from "../../controllers/user/resetUserPassword.controller";
import sendResetUserPasswordController from "../../controllers/user/sendResetUserPassword.controller";
import updateUserController from "../../controllers/user/updateUser.controllers";
import { authUser } from "../../middlewares/authUser.middleware";

const router = Router();

router.post("", createUserController);
router.post("/resetPassword", sendResetUserPasswordController);
router.get("", listUsersController);
router.get("/user", authUser, getOwnUserController);
router.patch("/:id", authUser, updateUserController);
router.patch("/password/:token", resetUserPasswordController);
router.delete("/:id", authUser, userDeleteController);
export default router;
