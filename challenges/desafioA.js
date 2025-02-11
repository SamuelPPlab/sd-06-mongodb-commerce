/*
  Inclua o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.

  Para isso, escreva no arquivo desafioA.js duas queries, nesta ordem:

  Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald"
  no valor desse campo.

  Crie uma query que retorne o nome e criadoPor de todos os produtos.
*/

db.produtos.update({}, { $set: { criadoPor: "Ronald McDonald" } }, true, true);

db.produtos.find({}, {
  nome: true,
  criadoPor: true,
  _id: false,
});
