let bd = require('../database/db.js');
const TarefasDao = require('../DAO/tarefas-dao');
const geraView = require('../views/template_todo_app');

class TarefasController{

    static geradorTarefas(){
        return ((req,res)=>{

            const tarefasDao = new TarefasDao(bd);
        
            tarefasDao.mostra()
                .then( (rows)=>{
            
                if(rows.length>0){
                    
                    res.send(geraView(rows));
                      
                };
                })
                .catch(erro => console.log(erro));
        })
    }

    static adicionaTarefas(){
        return ((req, res)=>{
            const tarefasDao = new TarefasDao(bd);

            tarefasDao.adiciona(req.body)
                .then(res.redirect('/'))
                .catch(erro => console.log(erro));
        })
    }

    static removeTarefas(){
        return ((req, res)=>{
            const tarefasDao = new TarefasDao(bd);

            tarefasDao.deleta(req.params.id)
                .then((resp)=>res.send(resp))
                .catch(erro => console.log(erro));
        })
    }
}

module.exports = TarefasController;