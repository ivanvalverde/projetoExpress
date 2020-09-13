const TarefasController = require('./tarefas-controller.js')


module.exports = (app) => {

app.get('/',TarefasController.geradorTarefas())

}