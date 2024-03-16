const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.json({})
})

module.exports = router

//mongodb+srv://kvictor1711:La97jkMINGsq8EaS@cluster0.emasswd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0