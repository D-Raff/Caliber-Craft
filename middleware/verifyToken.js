import { verifyUser } from "../model/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const auth = async (req,res,next)=>{
    const {emailAdd,userPass} = req.body
    const hashedPassword = await verifyUser(emailAdd)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            const token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1y'})
            res.cookie('jwt',token,{httpOnly:false})
            res.send({
                token:token,
                msg:'You have logged succesfully'
            })
            next() 
        }else{
            res.send({msg:'Password or Email address doesnt match'})
        }
    })
}
export default auth
