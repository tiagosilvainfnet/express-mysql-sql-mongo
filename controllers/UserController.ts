import { User } from "../models/user.entity";
import { Op } from 'sequelize';
const bcrypt = require("bcryptjs");

class UserController{
    async login(userEmail: string, password: string){
        let user = await User.findOne({
            where: {
                [Op.or]: [
                    {username: userEmail},
                    {email: userEmail}
                ]
            }
        })

        if(user){
            const verify = bcrypt.compareSync(password, user.password);
            if(verify) return user;
        }
        return null;
    }
}

export default UserController;