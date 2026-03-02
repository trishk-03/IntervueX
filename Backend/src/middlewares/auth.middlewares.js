const jwt = require('jsonwebtoken');
const tokenBlacklistModel = require('../models/blacklist.model');

async function authUser(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing"
        })
    }

    const isBlacklisted = await tokenBlacklistModel.findOne({ token });

    if (isBlacklisted) {
        return res.status(401).json({
            message: "Unauthorized access, token is blacklisted"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.token = token;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, invalid token"
        })
    }
}

module.exports = authUser;