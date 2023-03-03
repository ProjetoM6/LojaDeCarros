import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import userDeleteController from "../../controllers/user/deleteUser.controller";
import getOwnUserController from "../../controllers/user/getOwnUser.controllers";
import listUsersController from "../../controllers/user/listUsers.controllers";
import updateUserController from "../../controllers/user/updateUser.controllers";
import { authUser } from "../../middlewares/authUser.middleware";

const router = Router();

router.post("", createUserController);
router.get("", listUsersController);
router.get("/profile", authUser, getOwnUserController);
router.patch("/:id", authUser, updateUserController);
router.delete("/:id", authUser, userDeleteController);
export default router;
