// //require ('dotenv').config();

// // var cors = require('cors');
// const http = require('http');

// const express = require('express');

// //const es6Renderer = require('express-es6-template-engine');

// const app = express();
// //const pgp = require("pg-promise")();

// const server = http.createServer(app);
// const path = require('path');



// app.listen(port, () => {
//     console.log("troubles");
//     //console.log(`Server running at http://${hostname}:${port}`);
// });

// app.get('/express_backend', (req, res) =>{
//     res.send({ message: "We Have Liftoff"});
// });


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});
app.listen(port, () => console.log(`Listening on port ${port}`));
