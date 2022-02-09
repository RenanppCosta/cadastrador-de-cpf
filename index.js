// Importar o express

const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")


// Criar um servidor com o express

const servidor = express()


// Definir uma rota e associar a ela a execução de uma função

servidor.get("./pessoas",(req, res) =>{
    console.log("Tentaram acessar a rota /pessoas")
    res.send("lista de pessoas: Renan, Wendel, Hugo")
})


servidor.get("ip",(req,res) =>{
    //Retornar para o cliente o IP dele...

})


// Levantar o nosso servidor

servidor.listen(3000,()=>{console.log("Servidor escutando na porta 3000")})



