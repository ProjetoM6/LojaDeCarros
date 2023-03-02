import { Request, Response } from "express";
import resetUserPasswordService from "../../services/user/resetUserPassword.services";

const resetUserPasswordController = async (req: Request, res: Response) => {

    const {token} = req.params
    const {newPassword} = req.body

    await resetUserPasswordService(token, newPassword)

    return res.json({
        message: "Password changed!"
    })
}

export default resetUserPasswordController