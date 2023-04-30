const express = require("express")
const router = express.Router()
const { getVans, getSingleVan } = require("../controllers/vanControllers")

router.get("/", getVans)
router.get("/:id", getSingleVan)

module.exports = router