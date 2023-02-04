import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new Users({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        })
        const register = await newUser.save();
        res.status(200).json(register)
    } catch (error) {
        res.status(404).send("User already exist")
    }
}
export const login = async(req,res,next)=>{
    try {

        const user = await Users.findOne({username:req.body.username})
        if (!user) {
           return res.status(404).send("User not found") 
        }
        const passwordCheck = await bcrypt.compareSync(req.body.password, user.password);
        if (!passwordCheck) {
            return res.status(404).send("Password is not correct")
        }

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},  process.env.JWTTOKEN)

        const {password,isAdmin,...otherDetails} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json({...otherDetails})
    } catch (error) {
        next(error)
    }
}