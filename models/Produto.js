const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
})

const produto = mongoose.model('produto', Schema)

module.exports = produto
