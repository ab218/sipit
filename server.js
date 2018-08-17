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

const yelpApi = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${settings['YELP_API_KEY']}`,
  },
})

const usersRoutes = require("./routes/Users.js");
const reviewsRoutes = require("./routes/Reviews.js");

app.use("/api/users", usersRoutes(knex));
app.use("/api/reviews", reviewsRoutes(knex));

app.post("/api/yelp", function (req, res) {
  return yelpApi
    .get('/businesses/search', {
      params: {
        limit: req.body.limit,
        categories: req.body.category,
        latitude: req.body.location.lat,
        longitude: req.body.location.lng
      },
    })
    .then(response =>
      res.send(response.data.businesses.map(business => {
        const { id, name, coordinates, rating, image_url, categories } = business
        return ({
          id,
          name,
          coordinates,
          rating,
          image_url,
          categories,
        })
      })))
    .catch(error => console.error(error))
})

app.get("/api/:id/business", function (req, res) {
  return yelpApi
    .get(`/businesses/${req.params.id}`, {
    })
    .then(response =>
      res.send(response.data))
    .catch(error => console.error(error))
})

app.listen(PORT, () => {
  console.log(`Server up`);
});