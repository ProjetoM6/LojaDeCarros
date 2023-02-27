import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";

const router = Router();

router.post("", createUserController);
// router.get("", listUsersController);
// router.get("/user", authUser, getOwnUserController);
// router.patch("/:id", authUser, updateUserController);
// router.delete("/:id", authUser, userDeleteController);
export default router;
