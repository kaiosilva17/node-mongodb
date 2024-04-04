const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
})

const Comanda = mongoose.model('Comanda', Schema)

module.exports = Comanda
