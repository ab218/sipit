const express = require('express');

const router = express.Router();
const axios = require('axios');

const yelpApi = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});

router.post('/loc', (req, res) => yelpApi
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

router.post('/latlng', (req, res) => yelpApi
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

router.get('/:id/details', (req, res) => yelpApi
  .get(`/businesses/${req.params.id}`, {
  })
  .then(response => res.send(response.data))
  .catch(error => console.error(error)));

router.get('/:id/reviews', (req, res) => yelpApi
  .get(`/businesses/${req.params.id}/reviews`, {
  })
  .then(response => res.send(response.data))
  .catch(error => console.error(error)));

module.exports = router;
