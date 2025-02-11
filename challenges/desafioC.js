/*
  Adicione o campo avaliacao em todos os documentos da coleção e efetue
  alterações nesse campo.

  Para isso, escreva no arquivo desafioC.js quatro queries, nesta ordem:

  Crie uma query que inclua o campo avaliacao do tipo NumberInt e com o
  valor 0 em todos os documentos da coleção.

  Crie uma query que incremente o valor do campo avaliacao em 5 em todos
  os sanduíches de carne do tipo bovino. Dica: utilize como filtro o campo
  tags.

  Crie uma query que incremente o valor do campo avaliacao em 3 em todos
  os sanduíches de ave.

  Crie uma query que retorne o nome e avaliacao de todos os sanduíches.
*/

db.produtos.update({}, { $set: { avaliacao: NumberInt(0) } }, true, true);

db.produtos.update({ tags: { $all: ["bovino"] } }, {
  $set: { avaliacao: NumberInt(5) },
},
false,
true);

db.produtos.update({ tags: { $all: ["ave"] } }, {
  $set: { avaliacao: NumberInt(3) },
},
false,
true);

db.produtos.find({}, {
  nome: true,
  avaliacao: true,
  _id: false,
});
