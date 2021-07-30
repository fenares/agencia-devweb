const express = require("express");
const path = require("path");
const routes = express.Router();

routes.get("/blog.html", (req,res) => {res.sendFile(path.resolve("views", "blog.html"));});
routes.get("/home.html", (req,res) => {res.sendFile(path.resolve("views", "home.html"));});
routes.get("/", (req,res) => { res.redirect("/home.html")});
routes.get("/maintenance", (req,res) => {res.sendFile(path.resolve("views", "maintenance.html"));});
routes.get("/contato", (req,res) => {res.sendFile(path.resolve("views", "contato.html"));});
routes.get("/receber-contato", (req,res) => {console.log(req.body);
    res.send("Contato Recebido")});

module.exports = routes;