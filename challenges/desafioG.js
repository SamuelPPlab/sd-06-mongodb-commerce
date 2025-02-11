/*
  Remova o item cebola de todos os sanduíches.

  Para isso, escreva no arquivo desafioG.js duas queries, nesta ordem:

  Crie uma query que faça a remoção do item cebola em todos os sanduíches.

  Crie uma query que retorne o nome e ingredientes de todos os documentos.
*/

db.produtos.updateMany({}, {
  $pull: {
    ingredientes: "cebola",
  },
});

db.produtos.find({}, {
  nome: true,
  ingredientes: true,
  _id: false,
});
