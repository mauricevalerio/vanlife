const mongoose = require("mongoose")

const vanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    type: {
        type: String,
        enum: ["simple", "rugged", "luxury",]
    },
    hostId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Host"
    }
}, { timestamps: true })

module.exports = mongoose.model("Van", vanSchema)