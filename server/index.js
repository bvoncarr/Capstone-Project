//require ('dotenv').config();

// var cors = require('cors');
const http = require('http');

const express = require('express');

// const es6Renderer = require('express-es6-template-engine');

const app = express();
// const pgp = require("pg-promise")();

const server = http.createServer(app);
const path = require('path');


const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!!!!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});