const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const hostSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

hostSchema.statics.register = async function (username, password, name) {
    if (!username) throw new Error("Username required.")

    if (!password) throw new Error("Password required.")

    if (!name) throw new Error("Name required.")

    const existsUsername = await this.findOne({ username })

    if (existsUsername) {
        throw new Error("Username already exists.")
    }

    const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10))

    const newHost = await this.create({ username, password: hashedPassword, name })
    return newHost
}

hostSchema.statics.login = async function (username, password) {
    if (!username || !password) {
        throw new Error("Please enter a username and password.")
    }

    const host = await this.findOne({ username })

    if (!host) {
        throw new Error("Username not registered.")
    }

    const matchPassword = await bcrypt.compare(password, host.password)

    if (!matchPassword) {
        throw new Error("Password in incorrect!")
    }
    return host
}

module.exports = mongoose.model("Host", hostSchema)