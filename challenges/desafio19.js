db.produtos.update({}, { $rename: { descricao: "descricaoSite" } });

db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 });
