const CPF = require("cpf")
const fs = require("fs")

// imprime uma mensagem de boas vindas
console.log("Seja bem vindo ao cadastrador de CPF's");

// 1 - capturar o CPF digitado pelo usuário
var cpf = process.argv[2]

// 2 - Validar o CPF...
let cpfValido = CPF.isValid(cpf)
// 3 - Caso a informação seja um CPF válido, salvar num arquivo dados.txt
// caso contrário, exibir mensagem de erro:
if(cpfValido){
    console.log("CPF Válido! Salvando")
    fs.writeFileSync("dados.txt", cpf + "\n", {flag:"a"})
}else{
    console.log("CPF Inválido. Digite direito!")
}


console.log("FIM");