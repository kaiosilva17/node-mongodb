const mongoose = require('mongoose')

const ingredientesSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },

    descricao: {
        type: String,
        required: true,
    }

})

const Schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: 0
    },
    tamanho: {
        type: String,
    },
    tipo: {
        type: String,
        required: true,
    },
    ingredientes : [ingredientesSchema]
})



const produto = mongoose.model('produto', Schema)


module.exports =  produto
