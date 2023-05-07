const Van = require("../models/vanModels")

// GET - /api/host/vans
const getHostVans = async (req, res) => {
    const { user } = req

    const van = await Van.find({ hostId: user })
    res.status(200).json(van)
}

// POST - /api/host/vans
const postHostVan = async (req, res, next) => {
    const { name, price, description, imageUrl, type } = req.body
    const { user: userId } = req
    try {
        for (let key in req.body) {
            if (!req.body[key]) {
                res.status(400)
                throw new Error(`Please add a ${key}`)
            }
        }
        const van = await Van.create({ name, price, description, imageUrl, type, hostId: userId })
        res.status(200).json({ van })
    } catch (e) {
        next(e)
    }
}

// GET - /api/host/vans/:id
const getSingleHostVan = async (req, res) => {
    try {
        const van = await Van.findOne({ _id: req.params.id })
        if (!van) {
            throw new Error("No van found")
        }
        res.status(200).json(van)
    } catch (e) {
        next(e)
    }
}

// PUT - /api/host/vans/:id
const updateHostVan = async (req, res) => {
    res.status(200).json({
        message: `Update host van ${req.params.id}`
    })
}

// DELETE - /api/host/vans/:id
const deleteHostVan = async (req, res) => {
    try {
        const van = await Van.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: `Deleted van ${van.name}`
        })
    } catch (e) {
        next(e)
    }

}

module.exports = {
    getHostVans,
    postHostVan,
    getSingleHostVan,
    updateHostVan,
    deleteHostVan
}