const express = require("express");
const app = express();

// Rota de teste
app.get("/", (req, res) => {
  res.send("Backend do CRUD de músicas está rodando!");
});

// Sobe o servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});