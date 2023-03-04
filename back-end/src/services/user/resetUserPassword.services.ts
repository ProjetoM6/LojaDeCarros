import { hash } from "bcrypt"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { AppError } from "../../errors/appError"

const resetUserPasswordService = async(token: string, newPassword: string): Promise<void> =>{

    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({
        where: {
            token_reset_password: token
        }
    })

    if(!user){
        throw new AppError(404, "User not found")
    }

    const hashedPassword = await hash(newPassword, 10)

    await userRepository.update({
        id: user.id
    },{
        token_reset_password: "",
        password: hashedPassword
    })
}

export default resetUserPasswordService