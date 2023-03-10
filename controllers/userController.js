const db = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// Class contains all user controller functions
userModel = db.users

class UserController {
    static async registerUser(req, res ) {
        const { username, password } = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        // res.status(200).json({username, password, hashedPassword})
        const newUser = {
            username: username,
            password: hashedPassword
        }
        try{
            const saveUserData = await userModel.create(newUser)
            res.status(201).json({status: 201, message: "User is registered!", data: saveUserData})
        }catch(error) {
            res.status(400).json({status: 400, message: error.message})
        }
    }
    static async logUser(req, res) {
        const {username, password} = req.body
        try {
            const checkUser = await userModel.findOne({where: {username}});
            const hashedPassword = checkUser.dataValues.password;
            const checkPwd = await bcrypt.compare(password, hashedPassword);
            const user_id = checkUser.dataValues.id
            if(checkPwd) {
                const token = await jwt.sign({user_id, username}, process.env.JWT_SECRET, {expiresIn: "1w"})
                res.cookie("authToken", token, {httpOnly: true, maxAge: 1000 * 84000 * 7})
                res.status(200).json({status: 200, message: "User logged in!", token})
            } else {
                res.status(400).json({status: 400, message: "Incorrect passowrd"})
            }
        } catch (error) {
            res.status(400).json({status: 400, message: error.message})
        }
    }
}

module.exports = UserController