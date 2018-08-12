const express = require('express');
const knexConfig = require('./knexfile');
const bodyParser = require('body-parser');
const knex = require('knex')(knexConfig['development']);
const PORT = process.env.API_PORT | 8081; // this port needs to match the port in the webapack.config.js -> devServer -> proxy

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const usersRoutes = require("./routes/Users.js");

app.use("/api/users", usersRoutes(knex));


app.listen(PORT, () => {
  console.log(`Server up`);
});