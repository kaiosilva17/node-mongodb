const produto = require("../models/Produto")

const ProdutoController = {
    getAll: async (req, res) => {
        /*const nome = req.body.nome
        const regex = new RegExp(tipo.split('').join('-?'), 'i')
        res.json(await produto.find({ nome:{$regex: new RegExp(tipo, 'i')}}))*/
        res.json(await produto.find({ nome:{$regex: req.query.nome , $options:"i"}}))

        /*const filtros = {}
const campos = Object.keys(Produto.schema.paths)

for(let campo in req.query){
    if(campos.include(campo)){
        filtros[campo] = {$regex: new RegExp(req.query[campo], 'i)}
    }
}
res.json(await Produto.find(filtros))
        */
    },
    get: async (req, res) => {
        try {
            res.json(await produto.create(req.params.id))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
    create: async (req, res) => {
        try {
            res.json(await produto.findById(req.body))
        } catch (error) {
            res.status(400).json(error)
        }
    },
    update: async (req, res) => {
        try {
            res.json(await produto.findByIdAndDelete(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await produto.findByIdAndUpdate(req.params.id))
        } catch (error) {
            res.status(404).json({ error: "Registro não encontrado" })
        }
    },
}

module.exports = ProdutoController