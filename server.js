const express = require('express');
const knexConfig = require('./knexfile');
const bodyParser = require('body-parser');
const knex = require('knex')(knexConfig['development']);
const PORT = process.env.API_PORT | 8081; // this port needs to match the port in the webapack.config.js -> devServer -> proxy

const cors = require('cors')
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const axios = require('axios')
const settings = require('./settings.json')

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${settings['YELP_API_KEY']}`,
  },
})

const usersRoutes = require("./routes/Users.js");

app.use("/api/users", usersRoutes(knex));

app.get("/api/yelp", function (req, res) {
  console.log('hi im here\n')
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee,coffeeroasteries,coffeeshops',
        location: 'vancouver'
      },
    })
    .then(resp =>
      res.send(resp.data.businesses.map(business => {
        return ({
          name: business.name,
          coords: business.coordinates,
        })
      })))
    .catch(error => console.error(error))
})

app.listen(PORT, () => {
  console.log(`Server up`);
});