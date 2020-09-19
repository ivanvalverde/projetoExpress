class TarefasDao {

    constructor(db){
        this._db = db;
    }

    adiciona(tarefa){
        return new Promise((resolve, reject) =>{
            this._db.run(`INSERT INTO Tarefas (titulo, descricao, status) VALUES (?,?,?)`,
            [tarefa.titulo, tarefa.descricao, tarefa.status],
            (err)=>{
                if(err){
                    console.log(err);
                    return reject(`Não foi possível adicionar a tarefa!`);
                }
                
                resolve();
            });
        });
    }

    mostra(){
        return new Promise((resolve,reject)=>{
            this._db.all(`SELECT * FROM Tarefas;`, (err, rows)=>{
    
                if (err) return reject('Não foi possível mostrar as tarefas!');
                
                return resolve(rows);
            })
        })
    }

    deleta(tarefa){
        return new Promise((resolve, reject) =>{
            this._db.run(`DELETE FROM Tarefas WHERE id_tarefas=?`, [tarefa],
            (err)=>{
                if(err){
                    console.log(err);
                    reject(`Não foi possível remover a tarefa!`);
                }
                
                resolve({mensagem: "sucesso"});
            });
        });
    }
    
}

module.exports = TarefasDao;