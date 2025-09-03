const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    employed: {
        type: Boolean,
        required: [true, "Employed status is required"]
    }
},
{
    timestamps: true
},

)

const itemModel = mongoose.model('Item', ItemSchema)

module.exports = itemModel