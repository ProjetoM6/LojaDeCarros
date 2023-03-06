import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"
import { IEmailRequest } from "../../interfaces/emails"
import sendEmail from "../../utils/sendEmail.util"

const sendResetUserPasswordService = async(email: string, protocol: string, host: string | undefined): Promise<void> =>{

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            email: email
        }
    })

    if(!user){
        throw new AppError(404, "User not found")
    }

    const resetPasswordToken = (Math.random() + 1).toString(36).substring(2);

    await userRepository.update({
        id: user.id
    },{
        token_reset_password: resetPasswordToken
    })

    const emailData: IEmailRequest = {
        to: email,
        subject: "Reset de senha",
        text: `<h1>Mudança de senha requerida pelo usuário</h1>
        <h3>Olá ${user.name}, acesse o link para mudar sua senha: ${protocol}://${host}/users/password/${resetPasswordToken}</h3>`,
    }

    await sendEmail(emailData)

}

export default sendResetUserPasswordService