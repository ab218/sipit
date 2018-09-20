require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8081;
const history = require('connect-history-api-fallback');
const axios = require('axios');
const knexConfig = require('./knexfile');
const knex = require('knex')(knexConfig.development);

const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

const usersRoutes = require('./routes/Users.js');
const reviewsRoutes = require('./routes/Reviews.js');
const loginRoutes = require('./routes/Login.js');
// const loginDataHelpers = require('./routes/loginDataHelpers.js');

app.use('/api/users', usersRoutes(knex));
app.use('/api/reviews', reviewsRoutes(knex));
app.use('/api/login', loginRoutes);

const yelpApi = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});

app.post('/api/yelp/loc', (req, res) => yelpApi
  .get('/businesses/search', {
    params: {
      limit: req.body.limit,
      term: req.body.term,
      location: req.body.location,
    },
  })
  .then(response => res.send(response.data.businesses.map((business) => {
    const {
      id, name, coordinates, rating, image_url, categories, review_count,
    } = business;
    return ({
      id,
      name,
      coordinates,
      rating,
      image_url,
      categories,
      review_count,
    });
  })))
  .catch(error => console.error(error)));

app.post('/api/yelp/latlng', (req, res) => yelpApi
  .get('/businesses/search', {
    params: {
      limit: req.body.limit,
      term: req.body.term,
      latitude: req.body.latLng.lat,
      longitude: req.body.latLng.lng,
    },
  })
  .then(response => res.send(response.data.businesses.map((business) => {
    const {
      id, name, coordinates, rating, image_url, categories, review_count,
    } = business;
    return ({
      id,
      name,
      coordinates,
      rating,
      image_url,
      categories,
      review_count,
    });
  })))
  .catch(error => console.error(error)));

app.get('/api/business/:id/details', (req, res) => yelpApi
  .get(`/businesses/${req.params.id}`, {
  })
  .then(response => res.send(response.data))
  .catch(error => console.error(error)));

app.get('/api/business/:id/reviews', (req, res) => yelpApi
  .get(`/businesses/${req.params.id}/reviews`, {
  })
  .then(response => res.send(response.data))
  .catch(error => console.error(error)));


// history must go after other endpoints and before app.use to enable fallback on heroku
app.use(history());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/public'));
  app.use(express.static('build'));
}

app.listen(PORT, () => {
  console.log(`Server up on http://localhost:${PORT}`);
});
