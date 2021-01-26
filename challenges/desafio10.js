db.produtos.updateMany({},
  {
    $set: {
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
    },
  });

db.produtos.updateMany({ nome: { $eq: "Big Mac" } },
  {
    $inc: {
      "vendasPorDia.3": 60,
    },
  });

db.produtos.updateMany({ tags: { $in: ["bovino"] } },
  {
    $inc: {
      "vendasPorDia.7": 120,
    },
  });

db.produtos.find({}, { nome: 1, valorUnitario: 1, _id: 0 });
