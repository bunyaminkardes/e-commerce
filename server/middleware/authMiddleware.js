const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({message: "Yetkisiz erişim."});
    }
    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({message: "Geçersiz token."});
    }
}

module.exports = authMiddleware;