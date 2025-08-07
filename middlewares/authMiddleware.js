const jwt = require("jsonwebtoken");
const authMiddlewre = (req, res, next) =>{
    const { authorization } = req.headers;
    const token = authorization.split(' ')[1];
    const userData = jwt.verify(token, process.env.JWT_SECRET);
    console.log(userData);
    next();
}
module.exports = authMiddlewre;