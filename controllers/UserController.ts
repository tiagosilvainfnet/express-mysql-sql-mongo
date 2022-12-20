import { User } from "../models/user.entity";
import { Op } from 'sequelize';
import Mail from '../util/Email';

const bcrypt = require("bcryptjs");

class UserController{
    mail: any;

    constructor(){
        let root_dir = __dirname;
        root_dir = root_dir.replace("\controllers", "").replace("/controllers", "")
        this.mail = new Mail(root_dir);
    }

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

    async register(username: string, name: string, email: string, password: string){
        let token = await bcrypt.hash(`${username}_${name}`, 10);

        // await User.create({
        //     username: username,
        //     name: name,
        //     email: email,
        //     password: password,
        //     active: false,
        //     token: token,
        //     role_id: 3,
        //     createdAt: new Date(),
        //     updatedAt: new Date(),
        // })

        this.mail.sendEmail(email, 'Confirmação de e-mail', 'token-email', {
            username,
            name,
            token
        })
        return true;
    }
}

export default UserController;