const express = require("express");
const path = require("path");

const indexController = require("../controllers/indexController")
const routes = express.Router();

routes.get("/blog.html", indexController.blog);
routes.get("/home.html", indexController.exibirHome);
routes.get("/", indexController.redirectHome);
routes.get("/maintenance", indexController.maintenance);
routes.get("/depoimentos", indexController.depoimentos);

routes.get("/contato", indexController.contato);
routes.post("/receber-contato", indexController.receberContato);

routes.get("/depoimentos",indexController.depoimentos);

routes.get("/cadastrar-depoimento", indexController.exibirFormDepoimento);
routes.post("/cadastrar-depoimento", indexController.cadastrarDepoimento);

module.exports = routes; 