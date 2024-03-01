import jwt from 'jsonwebtoken'

// Middleware function for authenticating a JWT token
const authenticateToken = (req, res, next) => {
    // Extracting the 'cookie' from the headers of the request
    let { cookie } = req.headers

    // Extracting the token from the cookie, assuming it's in the format 'jwt=<token>'
    let tokenInHeader = cookie && cookie.split('=')[1]

    // If no token is found, sending a 401 Unauthorized status
    if (tokenInHeader === null) res.sendStatus(401)

    // Verifying the token using the provided secret key
    jwt.verify(tokenInHeader, process.env.SECRET_KEY, (err, user) => {
        // If there's an error in verification, sending a 403 Forbidden status
        if (err) return res.sendStatus(403)

        // If verification is successful, attaching the user information to the request object
        req.user = user

        // Calling the next middleware in the chain
        next()
    })
}

// Exporting the authenticateToken middleware function
export default authenticateToken
