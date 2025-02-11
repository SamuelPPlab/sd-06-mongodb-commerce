/*
  Renomeie o campo descricao para descricaoSite em todos os documentos.

  Para isso, escreva no arquivo desafioS.js duas queries, nesta ordem:

  Crie uma query que faça a renomeação do campo descricao para
  descricaoSite em todos os documentos.

  Crie uma query que retorne o nome, descricao e descricaoSite de
  todos os documentos.
*/

db.produtos.updateMany({}, {
  $rename: { descricao: "descricaoSite" },
});

db.produtos.find({}, {
  nome: true,
  _id: false,
  descricao: true,
  descricaoSite: true,
});
