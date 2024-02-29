import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ProductsRouter from './routes/product.js'
import UsersRouter from './routes/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { checkUser } from './model/user.js';
config()

const PORT = process.env.MYSQL_ADDON_PORT
const app = express()

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    next();
})
app.use(cors()) 
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/users',UsersRouter)
app.use('/products',ProductsRouter)
// app.post('/admin', (req,res)=>{
//     const {emailAdd,userPass} = req.body
//     bcrypt.hash(userPass,10,async (err,hash)=>{
//         if(err) throw err
//         await addUser(emailAdd,hash)
//         res.send({
//             msg: "You have created an account"
//         })
//     })
// })

const auth = async (req,res,next)=>{
    const {emailAdd,userPass} = req.body
    console.log(emailAdd);
    const hashedPassword = await checkUser(emailAdd)
    bcrypt.compare(userPass,hashedPassword,(err,result)=>{
        if(err) throw err
        if(result === true){
            // const {emailAdd} = req.body
            console.log(emailAdd)
            const token = jwt.sign({emailAdd:emailAdd},process.env.SECRET_KEY,{expiresIn:'1y'})
            // res.cookie('jwt',token,{httpOnly:false})
            console.log(token);
            res.send({
                token:token,
                msg:'You have login succesfully'
            })
            next()
        }else{
            res.send({msg:'Password or Email address doesnt match'})
        }
    })
    //only the backend can access the hook if set to httpOnly
}
app.post('/login',auth,(req,res)=>{
})

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})