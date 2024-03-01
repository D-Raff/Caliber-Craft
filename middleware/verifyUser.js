// Importing necessary functions and libraries
import { verifyUser } from "../model/user.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Middleware function for authentication
const auth = async (req, res, next) => {
    // Destructuring email and password from the request body
    const { emailAdd, userPass } = req.body

    // Retrieving hashed password from the database using the email
    const hashedPassword = await verifyUser(emailAdd)

    // Comparing the provided password with the hashed password
    bcrypt.compare(userPass, hashedPassword, (err, result) => {
        // Handling potential errors
        if (err) throw err

        // If the password matches
        if (result === true) {
            // Creating a JWT token with the user's email and a secret key
            const token = jwt.sign({ emailAdd: emailAdd }, process.env.SECRET_KEY, { expiresIn: '1y' })

            // Setting the token in a cookie with httpOnly option as false
            res.cookie('jwt', token, { httpOnly: false })

            // Sending a success response with the token and a message
            res.send({
                token: token,
                msg: 'You have logged in successfully'
            })

            // Calling the next middleware in the chain
            next()
        } else {
            // If the password doesn't match, sending an error message
            res.send({ msg: 'Password or Email address doesn\'t match' })
        }
    })
}

// Exporting the authentication middleware function
export default auth

