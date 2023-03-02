import { Request, Response } from "express";
import sendResetUserPasswordService from "../../services/user/sendResetUserPassword.services";

const sendResetUserPasswordController = async (req: Request, res: Response) => {

    const {email} = req.body
    const protocol = req.protocol
    const host = req.get("host")

    await sendResetUserPasswordService(email, protocol, host)

    return res.json({
        message: "Token send"
    })
}

export default sendResetUserPasswordController