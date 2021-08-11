const indexController = {
    blog: (req,res) => {res.render("blog")},
    maintenance: (req,res) => {res.render("maintenance")},
    exibirHome: (req,res) => {res.render("home", {titulo: "Sua empresa vai ser incrível!"})},
    redirectHome: (req,res) => { res.redirect("/home.html")},
    depoimentos: (req,res) => {res.render("depoimentos", {depoimentos, titulo: "Depoimentos"})},
    contato: (req,res) => {res.render("contato")},
    receberContato: (req,res) => {res.send("Contato Recebido por : " + req.body.nome)},
    
    exibirFormDepoimento: (req,res) => {res.render("cadastroDepoimento")},
    criarDepoimento: (req,res) => {console.log(req.body)}

}
    


module.exports = indexController