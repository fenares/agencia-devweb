const  {uuid}  = require('uuidv4');

let listaDeProdutos = [
{
    id: uuid(),
    nome: "Notebook",
    descricao: "Asus Corei7",
    imagem: "https://cdn.iset.io/assets/55268/produtos/756/adesivo-para-notebook-matrix-1.jpg"
}

];

function cadastrarProduto (nome, descricao, imagem){
    const novoProduto = {
        id: uuid(),
        nome, descricao, imagem
    }
    return listaDeProdutos.push (novoProduto);
}

function excluirProduto (id){
    const novaListaDeProdutos = listaDeProdutos.filter((produto) => produto.id != id);

    if (novaListaDeProdutos.lenght>= listaDeProdutos.length) return false;

    listaDeProdutos = novaListaDeProdutos;
    return true;
}

module.exports = {listaDeProdutos, cadastrarProduto, excluirProduto}