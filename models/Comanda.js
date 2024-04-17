const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    mesa: {
        type: String,
        required: true
    },
    forma_pagamento: {
        type: String,
        required: true
    },
    data_pagamento: {
        type: Date
    },
    data: {
        type: Date
        
    }
})

const Comanda = mongoose.model('Comanda', Schema)

module.exports = Comanda
