require ('dotenv').config();

// var cors = require('cors');
const http = require('http');

const express = require('express');

const app = express();
const pgp = require("pg-promise")();

const server = http.createServer(app);
const path = require('path');


const PORT = process.env.PORT || 3001;
const table = 'tickets';
const db = pgp('postgres://sxxtltyj:QSymmcD0_hcWSxFMto3R_ceP9xL6j6jP@batyr.db.elephantsql.com/sxxtltyj');

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('/', (req, res) =>{
  res.send('Going to the moon');
});

app.get('/Tickets', (req, res) =>{
  console.log("in this thang")

 db.any("SELECT * FROM tickets") .then((allTickets) =>
    //console.log(allTickets));
   
    res.send(allTickets));
});
