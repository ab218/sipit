const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(knexConfig.development);

const PORT = process.env.API_PORT | 8081; // this port needs to match the port in the webapack.config.js -> devServer -> proxy

const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

const axios = require('axios');
const knexConfig = require('./knexfile');
const settings = require('./settings.json');

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${settings.YELP_API_KEY}`,
  },
});

const usersRoutes = require('./routes/Users.js');

app.use('/api/users', usersRoutes(knex));

app.get('/api/yelp', (req, res) => {
  let results = [];

  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee,coffeeroasteries,coffeeshops',
        location: 'vancouver',
      },
    })
    .then((reponse) => {
      results = reponse.data.businesses.map((business) => {
        const {
          name, coordinates, rating, image_url, id,
        } = business;
        return ({
          name,
          coordinates,
          rating,
          image_url,
          id,
        });
      });
      return results;
    })
    .then(results => Promise.all(results.map((result, i) => setTimeout(() => api.get(`/businesses/${result.id}/reviews`), i * 20)))).then((reviews) => {
      for (const [i, resu] of results.entries()) {
        console.log(reviews[i]);
        if (reviews[i]) {
          results[i] = { ...resu, ...reviews[i] };
        }
      }
      res.send(results);
    })
    .catch((error) => {
      res.status(500), console.log(error);
    });
});

app.listen(PORT, () => {
  console.log('Server up');
});
