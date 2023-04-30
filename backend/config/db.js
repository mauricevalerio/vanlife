const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`${conn.connection.host}`)

        mongoose.connection.on("error", err => {
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB