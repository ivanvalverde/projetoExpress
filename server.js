const express = require('express');
const rotas = require('./src/controllers/rotas.js')

const app = express();
const port = 3000;

rotas(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})