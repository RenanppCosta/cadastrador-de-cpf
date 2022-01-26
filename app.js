const pessoas = require("./pessoas.json")

const fs = require("fs")

//capturar: nome, cpf, casado, filhos do terminal
// e guardar em variáveis de mesmos nomes
const nome = process.argv[2]
const cpf = process.argv[3]
const casado = (process.argv[4]=="1")
const filhos = process.argv.slice(5)


/*const filhos = []
for(let i=5; i<process.argv.length; i++){
    filhos.push(process.argv[i])
}*/


///Passo 2: Criar um objeto com essas informações
const pessoa = {nome, cpf, casado, filhos}

//Passo 3: Adicionar o objeto criado ao array pessoas
pessoas.push(pessoa)

console.table(pessoas)

//Passo 4: Salvar o array de pessoas no arquivo pessoas.json
fs.writeFileSync("pessoas.json", JSON.stringify(pessoas, null, 4))
//Passo 5: Mostrar o arry de pessoas no formato de tabela
