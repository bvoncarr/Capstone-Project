//require ('dotenv').config();

const http = require('http');

const express = require('express');

//const es6Renderer = require('express-es6-template-engine');

const app = express();
//const pgp = require("pg-promise")();

const server = http.createServer(app);
const path = require('path');
const port = 3000;


app.listen(port, () => {
    console.log("troubles");
    //console.log(`Server running at http://${hostname}:${port}`);
});

app.get('/', (req, res) =>{
    res.send('We Have Liftoff!');
});

