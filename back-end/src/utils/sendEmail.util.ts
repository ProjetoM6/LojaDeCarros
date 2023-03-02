import { createTransport } from "nodemailer";
import { AppError } from "../errors/appError";
import { IEmailRequest } from "../interfaces/emails";

const sendEmail = async ({subject, text, to}: IEmailRequest) =>{

    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    await transporter.sendMail({
        from: "victoraugusto340@gmail.com",
        to: to,
        subject: subject,
        text: text
    }).then(() => {
        console.log("E-mail send with success")
    }).catch((err) => {
        console.log(err)
        throw new AppError(500, "Error sending email, try again later")
    })

}

export default sendEmail