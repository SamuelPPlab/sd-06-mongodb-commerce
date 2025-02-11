/*
  Conte quantos documentos contêm as palavras frango e hamburguer
  utilizando o operador $text.

  Para isso, escreva no arquivo desafioQ.js duas queries, nesta
  ordem:

  Crie uma query que faça a criação de um índice do tipo text no
  campo descricao com o idioma padrão portuguese.

  Crie uma query que retorne a quantidade de documentos que contêm as
  palavras frango e hamburguer utilizando o operador $text.
*/

db.produtos.createIndex({
  descricao: "text",
},
{ default_language: "portuguese" });

db.produtos.find({
  $text: { $search: "frango hamburguer" },
}).count();
