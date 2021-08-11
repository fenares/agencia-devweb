const express = require("express");
const produtoController = require("../controllers/produtoController");
const routes = express.Router();

//routes.get('/produtos/lista', (req,res) => {res.send("Página de Produtos")});
routes.get('/produtos/lista', produtoController.listarProdutos);

routes.get('/produtos/$', (req,res) => {
    console.log(req.params.nome);
    res.send("Página de Produtos")});

module.exports = routes;