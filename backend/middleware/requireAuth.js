const jwt = require("jsonwebtoken")
const User = require("../models/hostModels")

async function requireAuth(req, res, next) {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ message: "Authorization token required." })
    }

    //authorization = Bearer JWT
    const token = authorization.split(" ")[1]

    try {
        const { _id } = jwt.verify(token, process.env.JWT_SECRET_KEY)

        req.user = await User.findOne({ _id }).select("_id")
        next()

    } catch (e) {
        console.log(e)
        res.status(401).json({ message: "Request is is not authorized." })
    }

}

module.exports = requireAuth