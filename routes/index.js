const express = require("express");
const path = require("path");
const depoimentos = require("../models/depoimentos")
const routes = express.Router();

routes.get("/blog.html", (req,res) => {res.render("blog");});
routes.get("/home.html", (req,res) => {res.render("home", {titulo: "Sua empresa vai ser incrível!"});});
routes.get("/", (req,res) => { res.redirect("/home.html")});
routes.get("/maintenance", (req,res) => {res.render("maintenance");});
routes.get("/depoimentos", (req,res) => {res.render("depoimentos", {depoimentos, titulo: "Depoimentos"});});
routes.get("/contato", (req,res) => {res.render("contato");});
routes.post("/receber-contato", (req,res) => {
    res.send("Contato Recebido por : " + req.body.nome)});

module.exports = routes;