require ('dotenv').config();

const cors = require('cors');
const http = require('http');

const express = require('express');

const app = express();
const pgp = require("pg-promise")();

const server = http.createServer(app);
const path = require('path');


const PORT = process.env.PORT || 5000;
const table = 'tickets';
const db = pgp('postgres://sxxtltyj:QSymmcD0_hcWSxFMto3R_ceP9xL6j6jP@batyr.db.elephantsql.com/sxxtltyj');

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '/public')));

app.get('/moon', (req, res) =>{
  console.log("in this thang")

 db.any("SELECT * FROM moon") .then((moon) =>

   
    res.json(moon));
});

app.get('/mars', (req, res) =>{
  console.log("in this thang")

 db.any("SELECT * FROM mars") .then((mars) =>
   
   
    res.json(mars));
});

app.get('/snacks', (req, res) =>{
  console.log("in this thang")

 db.any("SELECT * FROM snacks") .then((snacks) =>
   
   
    res.json(snacks));
});

app.get('/merch', (req, res) =>{
  console.log("in this thang")

 db.any("SELECT * FROM merch") .then((merch) =>
   
   
    res.json(merch));
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/public/index.html'));
}); 


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});