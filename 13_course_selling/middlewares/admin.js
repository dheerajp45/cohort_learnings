const jwt = require("jsonwebtoken");
// const {JWT_ADMIN} = require("../config")
const dotenv = require("dotenv")
dotenv.config();
function adminMiddleware(req,res,next) {
    const token = req.headers.token;
    const decoded = jwt.verify(token,process.env.JWT_ADMIN);

    if(decoded){
        req.userId = decoded.id;
        next()
    }
    else{
        res.status(403).json({
            message:"you are not signed in"
        })
    }

}

module.exports = {
    adminMiddleware:adminMiddleware
}