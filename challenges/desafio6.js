db.produtos.updateMany({ nome: { $in: ["Big Mac", "Quarteirão com Queijo"] } }, { $push: { ingredientes: "Bacon" } });

db.produtos.find({}, { nome: 1, ingredientes: 1, _id: 0 }).pretty();
