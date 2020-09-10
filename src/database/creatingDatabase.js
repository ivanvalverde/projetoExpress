let sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('bancoDeDados.db', (err) => {
    if (err) {
      console.error(err.message);
    }
});

const tarefasTabela = `CREATE TABLE IF NOT EXISTS Tarefas(
  id_tarefas INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT,
  descricao TEXT,
  status TEXT
)`;

const inserindoDados = `INSERT INTO Tarefas(titulo, descricao, status)
VALUES ('Malhar', 'Todo dia na academia as 18h', 'To do'),
('Aula', 'Todo dia às 13:00 é o horário do Resilia', 'Doing'),
('Almoçar', 'Antes de começar a aula', 'Done')`;

db.serialize(()=>{
  
  db.run(tarefasTabela, (err)=>{
    if(err){
      console.log("Erro na criação da tabela");
      process.exit(1);
    }
  });

  db.run(inserindoDados, (err)=>{
    if(err){
      console.log("Erro na inserção de dados");
      process.exit(1);
    }
  });
  
});