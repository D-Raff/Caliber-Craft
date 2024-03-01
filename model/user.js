import {pool} from '../config/config.js'

const getUsers = async()=>{
    const[result] = await pool.query(`
    SELECT *
    FROM Users
    `)
    return result
}
const getUser = async(userID)=>{
    const [result] = await pool.query(`
    SELECT *
    FROM Users
    WHERE userID = ?
    `,[userID])
    return result
}
const addUser = async (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)=>{
    const [result] = await pool.query(`
   INSERT INTO Users (firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile) VALUES (?,?,?,?,?,?,?,?)
    `,[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile])
    return result
}
const editUser = async (userID,firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile)=>{
    const [user] = await pool.query(`
    UPDATE Users SET firstName = ?,lastName = ?,userAge = ?,gender = ?,userRole = ?,emailAdd = ?,userPass = ?,userProfile = ? WHERE (userID = ?)
    `,[firstName,lastName,userAge,gender,userRole,emailAdd,userPass,userProfile,userID])
    return getUsers(user)
}

const deleteUser = async (userID)=>{
    const [user] = await pool.query(`
    DELETE FROM Users
    WHERE userID = ?
    `,[userID])
    return getUsers(user)
}
const verifyUser = async (emailAdd)=>{
    const [[{userPass}]] = await pool.query(`
    SELECT userPass FROM Users WHERE emailAdd = ?
    `,[emailAdd])
    return userPass
}
export{getUsers,getUser,addUser,editUser,deleteUser,verifyUser} 