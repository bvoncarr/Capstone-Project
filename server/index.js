require ('dotenv').config();

const cors = require('cors');
const http = require('http');

const express = require('express');

const app = express();
const pgp = require("pg-promise")();

const server = http.createServer(app);
const path = require('path');


const PORT = process.env.PORT || 3001;
const table = 'tickets';
const db = pgp('postgres://sxxtltyj:QSymmcD0_hcWSxFMto3R_ceP9xL6j6jP@batyr.db.elephantsql.com/sxxtltyj');

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/', (req, res) =>{
  res.send('Going to the moon');
});

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



