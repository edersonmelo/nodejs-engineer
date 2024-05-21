const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Olá Mundo rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/em", (req, res, next) => {
  res.json(["Ederson Melo"]);
});
