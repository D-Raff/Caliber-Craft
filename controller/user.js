import { getUsers,getUser, addUser,editUser,deleteUser   } from "../models/user.js";
import bcrypt, {hash} from 'bcrypt'

export default   {
    getUsers: async (req,res)=>{
        try{
            res.send(await getUsers())
        }catch(e){
            res.status(404).json({
                status: 404,
                 msg:'Cannot get users'
            })
        }
    },
    getUser:async (req,res)=>{
        try{
            res.send(await getUser(+req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg: 'No user found'
            })
        }
    },
    addUser:async (req,res)=>{
        try{
            const {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
            // await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hash,userProfile)
            bcrypt.hash(userPass,10,async (err,hash)=>{
                if(err) throw err
                await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hash,userProfile)
                res.send({
                    msg: "New User Added ;)"
                })
            })
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to add a user'
            })
        }
      
    },
    editUser:async (req,res)=>{
        try{
            const [user] = await getUser(+req.params.userID)
            let {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
            firstName ? firstName=firstName: {firstName}= user
            lastName ? lastName=lastName: {lastName}=user
            userAge ? userAge=userAge: {userAge}=user
            gender ? gender=gender: {gender}=user
            userRole ? userRole=userRole: {userRole}=user
            emailAdd ? emailAdd=emailAdd: {emailAdd}=user
           userPass ? userPass=userPass: {userPass}=user
            userProfile ? userProfile=userProfile: {userProfile}=user
            await editUser(+req.params.userID,firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)
            res.json(await getUsers())
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Unable to edit a user'
            })
        }
    },
    deleteUser:async (req,res)=>{
        try{
            res.send(await deleteUser(req.params.userID))
        }catch(e){
            res.status(404).json({
                status:404,
                msg:'Cannot delete a user at this moment'
            })
        }
    },
  
}