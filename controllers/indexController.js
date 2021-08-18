const modelDepoimentos = require("../models/depoimentos")


const indexController = {
    blog: (req,res) => {res.render("blog")},
    maintenance: (req,res) => {res.render("maintenance")},
    exibirHome: (req,res) => {res.render("home", {titulo: "Sua empresa vai ser incrível!"})},
    redirectHome: (req,res) => { res.redirect("/home.html")},
    depoimentos: (req,res) => {res.render("depoimentos", {depoimentos: modelDepoimentos.depoimentos, titulo: "Depoimentos"})},
    contato: (req,res) => {res.sendFile(path.resolve("views", "contato.html"))},
    receberContato: (req,res) => {res.send("Contato Recebido por : " + req.body.nome)},
    
    exibirFormDepoimento: (req,res) => {res.render("cadastroDepoimento")},
    
    cadastrarDepoimento: (req, res) => {
        console.log(req.body);
        const { autor, titulo, descricao } = req.body;
    
        modelDepoimentos.cadastrarDepoimento(autor, titulo, descricao);
        return res.redirect("/depoimentos");
      },
    
}
    


module.exports = indexController