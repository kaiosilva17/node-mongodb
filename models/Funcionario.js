const mongoose =  require('mongoose');

const FuncionarioSchema = mongoose.Schema({
    nome:{
        type: String,
        trim: true,
        minLength: 2,
        required: true,
    },

    cpf:{
        type: Number,
        default: 0,
        required: true,
        min: 0,
        match: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    },

    telefone: {
        type: Number,
        default: 0,
        required: true,
        match: /^\(\d{2}\) \d{5}-\d{4}$/,
    },

    endereco: {
        type: String,
        required: true
    },

    sexo: {
        type:String,
        uppercase: true,
        enum: ["F", "M"]
    },

    cargo: {
        type: String,
        trim: true,
        minLength: 5,
        required: true,
    }
})

const Funcionario = mongoose.model('Funcionario', FuncionarioSchema)

module.exports = Funcionario