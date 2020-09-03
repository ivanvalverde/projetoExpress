let tarefas = [{
    "titulo": "Dentista",
    "descricao": "Ir ao dentista amanhã"
},
{
    "titulo": "Faculdade",
    "descricao": "Participar durante a aula de Informática"
},
{
    "titulo": "Casa",
    "descricao": "Lavar a Louça"
}];


const geraView = require('./views/template_todo_app');



module.exports = (app) => {

app.get('/',(req,res)=>{
    res.send(geraView(tarefas));
})

app.get('/teste',(req,res)=>{
    res.send("Caminho sendo testado");
})

}