const mongoose =  require('mongoose');

const clienteSchema = mongoose.Schema({
    nome:{
        type: String,
        trim: true,
        uppercase: true,
        minLength: 3,
        required: true,
    },

    cpf:{
        type: Number,
        default: 0,
        required: true,
        match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    },

    telefone: {
        type: Number,
        default: 0,
        required: true,
        match: /^\(\d{2}\) \d{5}-\d{4}$/,
    },

    email: {
        type: String,
        default: 0,
        required: true,
    },
})

const Cliente = mongoose.model('Cliente', clienteSchema)

module.exports = Cliente