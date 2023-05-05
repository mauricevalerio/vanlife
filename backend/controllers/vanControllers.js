const Van = require("../models/vanModels")

// GET - /api/vans
const getVans = async (req, res) => {
    try {
        //filter by visibility
        const van = await Van.find()
        if (!van) {
            res.status(400)
            throw new Error("No vans found :(")
        }
        res.status(200).json(van)
    } catch (e) {
        next(e)
    }
}

// GET - /api/vans/:id
const getSingleVan = async (req, res, next) => {
    try {
        const van = await Van.findById(req.params.id)
        if (!van) {
            throw new Error(`No van with ID ${req.params.id} exists`)
        }
        res.status(200).json(van)
    } catch (e) {
        next(e)
    }
}

module.exports = {
    getVans,
    getSingleVan
}