db.produtos.updateMany({}, { $set: { avaliacao: NumberInt("0") } });
db.produtos.updateOne({ tags: "bovino" }, { $inc: { avaliacao: 5 } });
db.produtos.updateOne({ tags: "ave" }, { $inc: { avaliacao: 5 } });
db.produtos.find({}, { nome: 1, avaliacao: 1, _id: 0 });
