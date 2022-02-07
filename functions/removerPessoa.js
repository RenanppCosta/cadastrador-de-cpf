const posicao = process.argv[2]

const pessoas = require("./pessoas.json")

pessoas.splice(posicao,1)

const fs = require("fs")

fs.writeFileSync("./pessoas.json", JSON.stringify(pessoas,null,4))
