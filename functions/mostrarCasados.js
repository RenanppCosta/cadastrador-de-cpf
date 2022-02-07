const pessoas = require("./pessoas.json")



let casados = pessoas.filter(p => p.casado == true)

console.table(casados)
