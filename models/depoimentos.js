const depoimentos = [
    {
        autor: "Vinny",
        titulo: "Depoimento fake 1",
        descricao: "ndicndpocmdwnpicndwpcmdlm"
    },
    {
        autor: "Mario",
        titulo: "Depoimento fake 2",
        descricao: "hrehrehertghregrg"
    },
    {
        autor: "Felipe",
        titulo: "Depoimento fake 3",
        descricao: "gergerueueujejhetyh"
    }

];

function cadastrarDepoimento(autor, titulo, descricao) {
    return depoimentos.push({autor, titulo, descricao, });
  }


module.exports = { depoimentos, cadastrarDepoimento}