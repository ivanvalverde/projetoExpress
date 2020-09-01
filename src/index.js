const express = require('express');
const paginaTodo = require('./views/template_todo_app.js')

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send(paginaTodo);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})