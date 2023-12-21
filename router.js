const express = require('express')
const carModel = require('./model/voitureModel')

const route = express.Router();

route.get('/', (req, res) => {
    res.send('Hello There !')
})

route.get('/cars', async (req, res) => {
    try {
        const carList = await carModel.find({})
        res.status(200).json(carList)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })
    }
})

route.post('/createcar', async (req, res) => {
    try {
        const car = await carModel.create(req.body);
        console.log(req.body);
        res.status(200).json(car)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message: error.message
        })        
    }
})


module.exports = route