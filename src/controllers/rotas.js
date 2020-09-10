let bd = require('../database/db.js');


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

let array = [
    {
        nome: "Lucio",
        tarefa: [
            {titulo: "Yoga",
             descricao: "Yoga segunda e quarta"},
             
             {titulo: " Jogar LOL",
            descricao: "treinar suporte"}
             
                ]
    },
    {
        nome: "Jussara",
        tarefa: [
            {titulo: "Musculação",
             descricao: "Malhar todo dia"}]
    }
    
]


const geraView = require('../views/template_todo_app');



module.exports = (app) => {

app.get('/',(req,res)=>{
    res.send(geraView(tarefas));
})

/*app.get('/:id',(req,res)=>{
    
    for(let i=0; i<array.length;i++){
        if(req.params.id == array[i].nome){  
            res.send(geraView(array[i].tarefa));
        }
    }  
})*/

app.get('/novoteste',(req,res)=>{

    bd.all(`SELECT * FROM Tarefas WHERE titulo = 'Malhar'`, (err, rows)=>{
    
        if(err) throw err;
    
        if(rows.length>0){
            
            res.send(geraView(rows));
              
        };
    })

    
})

app.get('/teste',(req,res)=>{
    res.send("Caminho sendo testado");
})

}