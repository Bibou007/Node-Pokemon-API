const express = require("express");

const app = express();

const port = 3000;

console.log("Hello Node");
app.get("/", (req, res) => {
  res.send("Voici une api pour mes pokemons");
});
app.get("/api/pokemons/:id", (req,res) => {
    const id=req.params.id;
   res.send(`Voici le pokemon n°${id}`)
});
app.listen(port, () =>
  console.log(`Notre application a démarer sur : http://localhost:${port}`)
);
