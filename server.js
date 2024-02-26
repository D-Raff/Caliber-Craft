import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ProductsRouter from './routes/product.js'
import UsersRouter from './routes/user.js'

config()

const PORT = process.env.MYSQL_ADDON_PORT
const app = express()




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

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})