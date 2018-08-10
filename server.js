const express = require('express');


const PORT = process.env.API_PORT | 8081;       // this port needs to match the port in the webapack.config.js -> devServer -> proxy


const app = express();


// can be GETted through the webpack-dev-server at localhost:8080/api or whatever host/port makes sense
app.get('/api', (req, res) => {
  res.json({pretty: 'much', amazing: 'eh'});
});

app.listen(PORT, () => {console.log(`Server up`);});


