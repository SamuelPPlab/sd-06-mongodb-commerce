db.produtos.updateOne(
  { nome: "Big Mac" },
  {
    $currentDate: {
      ultimaModificacao: { $type: "date" },
    },
  },
);

db.produtos.find(
  {
    ultimaModificacao: { $exists: true },
  },
  {
    _id: false,
    nome: true,
  },
);
