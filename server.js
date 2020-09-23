const express = require('express');
const rotas = require('./src/routes/rotas.js')

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const port = process.env.port || 3000;

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.idTarefa != 'null') {
      var method = req.body._method
      delete req.body._method
      return method
    }
}))

app.use('/estatico',express.static(__dirname + '/src/public'));

rotas(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})