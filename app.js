//const http = require('http');
//http.createServer(express).listen(3000, ( ) => console.log("Levantando um servidor"));

//Esta página é executada pelo comando npm start, pois há um scrip inserido manualmente no package.json na linha 8

// Para instalar o nodemon como dev => npm install nodemon -D. Para utilizar o nodemon no Windows, é preciso executar o comando "Set-ExecutionPolicy Unrestricted" no Power. E depois de alterar o scrip no Package.json, utilizar o "npm run app.js"

const express = require('express');
const path = require("path");
const rotasDeProdutos = require("./routes/produtos");
const rotas = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("views"))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(rotasDeProdutos);
app.use(rotas);

app.listen(3000, () => console.log("Server running!"))

//app.get("/", (req, res) => { res.sendFile(__dirname + "/views/home.html")})
//app.get("/blog.html", (req, res) => { res.sendFile(__dirname + "/views/blog.html")})
//app.get("/home.html", (req, res) => { res.redirect("/")})
//app.get("/maintenance", (req, res) => { res.sendFile(__dirname + "/views/maintenance.html")})
//app.get("/contato", (req, res) => { res.sendFile(__dirname + "/views/contato.html")})
//app.post("/receber-contato", (req, res) => { console.log(req.body);
    //res.send("Contato Recebido")})




