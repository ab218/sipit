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
    const {
      limit, term, radius, open_now,
    } = req.body;
    const params = {
      limit, term, radius, open_now,
    };
    console.log(req.body);
    if (req.body.location) {
      params.location = req.body.location;
    } else {
      params.latitude = req.body.latLng.lat;
      params.longitude = req.body.latLng.lng;
    }
    const response = await yelpApi.get('/businesses/search', { params });
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
  } catch (err) {
    res.status(500).send(err.response.data);
  }
});

router.get('/:id/details', async (req, res) => {
  try {
    const response = await yelpApi.get(`/businesses/${req.params.id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send(err.response.data);
  }
});

router.get('/:id/reviews', async (req, res) => {
  try {
    const response = await yelpApi.get(`/businesses/${req.params.id}/reviews`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send(err.response.data);
  }
});

module.exports = router;
