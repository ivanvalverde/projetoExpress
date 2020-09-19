const express = require('express');
const rotas = require('./src/routes/rotas.js')

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/estatico',express.static('src/public'));

rotas(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})