const express = require("express")
require("dotenv").config()
const morgan = require("morgan")
const connectDB = require("./config/db")
const { errorHandler } = require("./middleware/errorHandler")

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan("tiny"))

app.use("/api/vans", require("./routes/vanRoutes"))

// /vans
app.use("/api/host", require("./routes/hostVanRoutes"))
// /register & /login
app.use("/api/host", require("./routes/hostRoutes"))

app.use(errorHandler)

app.listen(process.env.PORT, () => console.log(`Web server started and listening on port ${process.env.PORT}`))