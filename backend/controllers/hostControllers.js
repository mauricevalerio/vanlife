const Host = require("../models/hostModels")
const jwt = require("jsonwebtoken")

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET_KEY, { expiresIn: "3d" })
}

// POST - /api/host/login
const loginHost = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const loggedInHost = await Host.login(username.toLowerCase(), password)
        const token = createToken(loggedInHost._id)
        res.status(200).json({ username, token })
    } catch (e) {
        res.status(400)
        next(e)
    }
}

// POST - /api/host/register
const registerHost = async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password, name } = req.body
        const registeredHost = await Host.register(username.toLowerCase(), password, name)
        const token = createToken(registeredHost._id)
        res.status(200).json({ username, token })
    } catch (e) {
        res.status(400)
        next(e)
    }
}

module.exports = {
    loginHost,
    registerHost,
}