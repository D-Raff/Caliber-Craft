import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ProductsRouter from './routes/product.js'
import UsersRouter from './routes/user.js'
import LoginRouter from './routes/login.js'
import auth from './middleware/verifyToken.js'
import authenticateToken from './middleware/authenticate.js';


config()

const PORT = process.env.MYSQL_ADDON_PORT
const app = express()
app.use( (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
});

app.use(cors()) 
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/login',auth,authenticateToken,LoginRouter)
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