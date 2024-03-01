import { addUser } from "../model/user.js"; 
import bcrypt from 'bcrypt';

const hashpwdBeforeAdd = (req, res, next) => {
    const {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
    bcrypt.hash(userPass,10,async (err,hashpwd)=>{
        if(err) throw err
        await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hashpwd,userProfile)
        res.send({
            msg: "New User Added ;)"
        });
        next();
    })
}

export default hashpwdBeforeAdd;