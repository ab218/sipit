require('dotenv').config();
const express = require('express');
const knexConfig = require('./knexfile');
const bodyParser = require('body-parser');
const knex = require('knex')(knexConfig['development']);
const PORT = process.env.PORT || 8081; // this port needs to match the port in the webpack.config.js -> devServer -> proxy
const history = require('connect-history-api-fallback');
const path = require("path");

// const cors = require('cors')
const app = express();


// app.use(cors())

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

const usersRoutes = require("./routes/Users.js");
const reviewsRoutes = require("./routes/Reviews.js");

app.use("/api/users", usersRoutes(knex));
app.use("/api/reviews", reviewsRoutes(knex));

app.get('/api', (req, res) => {
  res.json({why: 'doesnt', this: 'work'});
});

const axios = require('axios')

const yelpApi = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
})

app.post("/api/yelp/loc", function (req, res) {
  return yelpApi
    .get('/businesses/search', {
      params: {
        limit: req.body.limit,
        term: req.body.term,
        location: req.body.location,
      },
    })
    .then(response =>
      res.send(response.data.businesses.map(business => {
        const { id, name, coordinates, rating, image_url, categories, review_count } = business
        return ({
          id,
          name,
          coordinates,
          rating,
          image_url,
          categories,
          review_count,
        })
      })))
    .catch(error => console.error(error))
})

app.post("/api/yelp/latlng", function (req, res) {
  return yelpApi
    .get('/businesses/search', {
      params: {
        limit: req.body.limit,
        term: req.body.term,
        latitude: req.body.latLng.lat,
        longitude: req.body.latLng.lng
      },
    })
    .then(response =>
      res.send(response.data.businesses.map(business => {
        const { id, name, coordinates, rating, image_url, categories, review_count } = business
        return ({
          id,
          name,
          coordinates,
          rating,
          image_url,
          categories,
          review_count,
        })
      })))
    .catch(error => console.error(error))
})

app.get("/api/business/:id/details", function (req, res) {
  return yelpApi
    .get(`/businesses/${req.params.id}`, {
    })
    .then(response =>
      res.send(response.data))
    .catch(error => console.error(error))
})

app.get("/api/business/:id/reviews", function (req, res) {
  return yelpApi
    .get(`/businesses/${req.params.id}/reviews`, {
    })
    .then(response =>
      res.send(response.data))
    .catch(error => console.error(error))
})

//history must go after other endpoints and before app.use to enable fallback on heroku
app.use(history());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/public'));
  app.use(express.static('build'));
}

//signIn check
app.post('/signin', function(req, res){
  console.log("yay");
  var userEmail = req.body.email;
  var userPassword = req.body.password;
  if (userEmail === 'admin' && password === 'admin'){
    res.send('success')
  } else {
    res.send('failed')
  }
})

app.listen(PORT, () => {
  console.log(`Server up on ${PORT}`);
});

