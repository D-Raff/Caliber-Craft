import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import ProductsRouter from './routes/product.js'
import UsersRouter from './routes/user.js'
import LoginRouter from './routes/login.js'
import auth from './middleware/verifyUser.js'
import authenticateToken from './middleware/authenticate.js';


config()

const PORT = process.env.MYSQL_ADDON_PORT
const app = express()

app.use(cors()) 
app.use(express.json())
app.use(cookieParser())
app.use(express.static('views'))
app.use('/login',auth,authenticateToken,LoginRouter)
app.use('/users',UsersRouter)
app.use('/products',ProductsRouter)

app.listen(PORT, ()=>{
    console.log('http://localhost:' + PORT);
})