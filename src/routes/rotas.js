const TarefasController = require('../controllers/tarefas-controller.js')


module.exports = (app) => {

app.get('/',TarefasController.geradorTarefas());

app.post('/',TarefasController.adicionaTarefas());

app.delete('/:id',TarefasController.removeTarefas());

app.put('/update/:id',TarefasController.atualizaTarefas());

}