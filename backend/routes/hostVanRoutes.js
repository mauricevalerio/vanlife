const express = require("express")
const router = express.Router()
const {
    getHostVans,
    postHostVan,
    getSingleHostVan,
    updateHostVan,
    deleteHostVan } = require("../controllers/hostVanControllers")
const requireAuth = require("../middleware/requireAuth")

router.use("/vans", requireAuth)
router.route("/vans").get(getHostVans).post(postHostVan)
router.route("/vans/:id").get(getSingleHostVan).put(updateHostVan).delete(deleteHostVan)

module.exports = router