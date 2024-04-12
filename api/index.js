const express = require("express");
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '../public/express'))
app.get("/express", (req, res) => {
    fs.readFile('public/express/Datos.json','utf8', function(err,data){
        if (err) {
            console.error('Error al leer el archivo JSON:', err);
            res.status(500).send('Error al leer el archivo JSON');
            return;
        }
        const jsonData = JSON.parse(data);
        res.render('index',{jsonData: jsonData})
    });
});
app.get("/cliente_servidor", (req, res) => res.send("Cliente Servidor on Vercel!"));
app.use(express.static('public'))

app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;