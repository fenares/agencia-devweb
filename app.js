//const http = require('http');
//http.createServer(express).listen(3000, ( ) => console.log("Levantando um servidor"));

const express = require('express');
const app = express()

app.get("/", (req, res) => { res.send("Welcome, padawan!")})
app.get("/maintenance", (req, res) => { res.sendFile(__dirname + "/views/maintenance.html")})

app.listen(3000, () => console.log("Server running!"))
