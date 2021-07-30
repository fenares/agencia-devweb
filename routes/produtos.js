const express = require("express");
const routes = express.Router();

routes.get('/produtos/lista', (req,res) => {res.send("Página de Produtos")});

routes.get('/produtos/$', (req,res) => {
    console.log(req.params.nome);
    res.send("Página de Produtos")});

module.exports = routes;