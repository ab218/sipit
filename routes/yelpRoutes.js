const express = require('express');

const router = express.Router();
const axios = require('axios');

const yelpApi = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${process.env.YELP_API_KEY}`,
  },
});

router.post('/loc', async (req, res) => {
  try {
    console.log(req.body);
    let response;
    if (req.body.location) {
      response = await yelpApi.get('/businesses/search', {
        params: {
          limit: req.body.limit,
          term: req.body.term,
          location: req.body.location,
        },
      });
    } else {
      response = await yelpApi.get('/businesses/search', {
        params: {
          limit: req.body.limit,
          term: req.body.term,
          latitude: req.body.latLng.lat,
          longitude: req.body.latLng.lng,
        },
      });
    }
    res.json(response.data.businesses.map(({
      id, name, coordinates, rating, image_url, categories, review_count,
    }) => ({
      id,
      name,
      coordinates,
      rating,
      image_url,
      categories,
      review_count,
    })));
  } catch (error) {
    res.send(error);
  }
});

router.get('/:id/details', async (req, res) => {
  try {
    const response = await yelpApi.get(`/businesses/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.send(err);
  }
});

router.get('/:id/reviews', async (req, res) => {
  try {
    const response = await yelpApi.get(`/businesses/${req.params.id}/reviews`);
    res.json(response.data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
