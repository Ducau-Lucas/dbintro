const express = require('express');
const dotenv = require('dotenv').config({path: 'config.env'})
const routes = require('./router')
const mongoConnect = require('./connect')

const app = express()
const PORT = process.env.PORT
app.use(express.json())

app.use('/', routes)
mongoConnect()

app.listen(process.env.PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})