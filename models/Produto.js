const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
    ingredientes: [{nome: String, descricao: String}]
})

const produto = mongoose.model('produto', Schema)

module.exports = produto
