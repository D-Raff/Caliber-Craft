//authenticate functions
// import jwt from 'jsonwebtoken'
// import bcrypt from 'bcrypt'
// import { addUser } from '../model/database.js'

// const authenticateToken = (req,res,next)=>{
//     let {cookie} = req.headers
//     let tokenInHeader = cookie && cookie.split('=')[1]
//     if(tokenInHeader===null)res.sendStatus(401)
//     jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
//         if(err) return res.sendStatus(403)
//         req.emailAdd = emailAdd
//         next()
//     })
// }


