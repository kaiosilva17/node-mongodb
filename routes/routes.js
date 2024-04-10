const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const ClienteController = require("../controllers/ClienteController");
const ComandaController = require("../controllers/ComandaController");
const FuncionarioController = require("../controllers/FuncionarioController");

const produto = require('../models/Produto')
const router = express.Router()

router.get('/', function (req, res) {
    res.json({})
})

router.get('/Produto', (req, res) => ProdutoController.getAll(req, res))
router.get('/Produto/:id', (req, res) => ProdutoController.get(req, res))
router.post('/Produto', (req, res) => ProdutoController.create(req, res))
router.delete('/Produto/:id', (req, res) => ProdutoController.delete(req, res))
router.put('/Produto/:id', (req, res) => ProdutoController.update(req, res))

router.get("/Cliente", (req,res) => ClienteController.getAll(req,res));
router.get("/Cliente/:id", (req,res) => ClienteController.getById(req,res));
router.post("/Cliente", (req,res) => ClienteController.insert(req,res));
router.delete("/Cliente/:id",(req,res) => ClienteController.delete(req,res));
router.put("/Cliente/:id",(req,res) => ClienteController.update(req,res));

router.get("/Comanda", (req,res) => ComandaController.getAll(req,res));
router.get("/Comanda/:id", (req,res) => ComandaController.getById(req,res));
router.post("/Comanda", (req,res) => ComandaController.insert(req,res));
router.delete("/Comanda/:id",(req,res) => ComandaController.delete(req,res))
router.put("/Comanda/:id",(req,res) => ComandaController.update(req,res));

router.get("/Funcionario", (req,res) => FuncionarioController.getAll(req,res));
router.get("/Funcionario/:id", (req,res) => FuncionarioController.getById(req,res));
router.post("/Funcionario", (req,res) => FuncionarioController.insert(req,res));
router.delete("/Funcionario/:id",(req,res) => FuncionarioController.delete(req,res));
router.put("/Funcionario/:id",(req,res) => FuncionarioController.update(req,res));


module.exports = router

