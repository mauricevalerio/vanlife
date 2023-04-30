const express = require("express")
const router = express.Router()
const { loginHost, registerHost } = require("../controllers/hostControllers")

router.post("/login", loginHost)
router.post("/register", registerHost)

module.exports = router
