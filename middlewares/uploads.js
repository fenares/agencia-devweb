const multer = require("multer")
const path = require("path")
const {v4: gerarNomeAleatorio} = require("uuid")

const storage = multer.diskStorage({
    destination: function (req, file, next) {
      next(null, path.resolve("public", "uploads"))
    },
    filename: function (req, file, next) {
      const extensao = file.originalname.split(".").pop()
      const nomeArquivo = `${gerarNomeAleatorio()}.${extensao}`

      next(null, nomeArquivo)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = upload