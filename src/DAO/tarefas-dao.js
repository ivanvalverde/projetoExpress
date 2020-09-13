class TarefasDao {

    constructor(db){
        this._db = db;
    }

    mostra(){
        return new Promise((resolve,reject)=>{
            this._db.all(`SELECT * FROM Tarefas;`, (err, rows)=>{
    
                if (err) return reject('Não foi possível mostrar as tarefas!');
                
                return resolve(rows);
            })
        })
    }
}

module.exports = TarefasDao;