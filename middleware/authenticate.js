//authenticate functions
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const authenticateToken = (req,res,next)=>{
    let {cookie} = req.headers
    let tokenInHeader = cookie && cookie.split('=')[1]
    if(tokenInHeader===null)res.sendStatus(401)
    jwt.verify(tokenInHeader,process.env.SECRET_KEY,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.emailAdd = emailAdd
        next()
    })
}


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
            res.send({msg:'Password doesnt match'})
        }
    })
    //only the backend can access the hook if set to httpOnly
}
app.post('/login',auth,(req,res)=>{
})