const express = require("express"); //importando o express
const app = express(); //inicializando o express na variavel app

//CRIANDO ROTAS
//app.get(rota, função de resposta)
//req = dados enviados pelo usuario
//res = resposta que vai ser enviada para o usuario
app.get("/",function(req,res){
    res.send('Bem vindo ao meu site');
});

app.get("/musica",function(req,res){
    res.send('Fique sempre por dentro do que a de mais novo no mundo da musica');
});

app.get("/filme",function(req,res){
    res.send('Pode pegar a pipoca, porque a sessão ja vai começar');
});

//nesse caso os parametros passados são obrigatorios para que a rota seja entendida pelo sistema
app.get("/variavel/:variavel/:idade", function(req,res){
    var variavel = req.params.variavel;
    var idade = req.params.idade;
    res.send("Olá "+ variavel+ " você tem "+ idade+ " anos" );
})

//ao adicionar a ? no final da variavel ela se torna opcional
app.get("/variavel/:variavel?/:idade?", function(req,res){
    var variavel = req.params.variavel;
    var idade = req.params.idade;
    res.send("Olá "+ variavel+ " você tem "+ idade+ " anos" );
})

//INICIANDO O SERVIDOR
//deve ser a ultima coisa a ser executada
//parametros esperados pela função listen(porta, erro)
app.listen(4000,function(erro){ //iniciando o servidor

    if(erro){
        console.error('Deu erro ao inicializar a aplicação');
    }else{
        console.info('O servidor foi iniciado com sucesso');
    }

});
