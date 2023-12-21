const mongoose = require('mongoose');

const voitureSchema = new mongoose.Schema({
    maker: {
        type: String,

    },
    model: {
        type: String,

    },
    year: {
        type: Date,
    },
    transmission: {
        type: String,
    },
    fuelType: {
        type: String,
    },
    mileage: {
        type: Number,
    },
    price: {
        type: Number,

    },
    sales: {
        type: Number,
        default: 0
    },
    country: {
        type: String,

    },
    inStock: {
        type: Boolean
    }

}, {
    timestamps: true
});

const carModel = mongoose.model('models', voitureSchema)

module.exports = carModel;