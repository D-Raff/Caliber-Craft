import { getUsers,getUser, addUser,editUser,deleteUser   } from "../model/database.js";
import bcrypt, {hash} from 'bcrypt'

export default   {
    getUsers: async (req,res)=>{
        res.send(await getUsers())
    },
    getUser:async (req,res)=>{
        res.send(await getUser(+req.params.userID))
    },
    addUser:async (req,res)=>{
        const {firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile} = req.body
        // await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hash,userProfile)
        bcrypt.hash(userPass,10,async (err,hash)=>{
            if(err) throw err
            await addUser(firstName,lastName,userAge,gender,userRole,emailAdd,hash,userProfile)
            res.send({
                msg: "New User Added ;)"
            })
        })
      
    },
    editUser:async (req,res)=>{
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
    },
    deleteUser:async (req,res)=>{
        res.send(await deleteUser(req.params.userID))
    },
  
}