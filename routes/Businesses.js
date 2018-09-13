// const express = require('express');

// const router = express.Router();
// const axios = require('axios');

// const yelpApi = axios.create({
//   baseURL: 'https://api.yelp.com/v3',
//   headers: {
//     Authorization: `Bearer ${process.env.YELP_API_KEY}`,
//   },
// });

// module.exports = () => {
//   router.post('/', (req, res) => yelpApi
//     .get('/businesses/search', {
//       params: {
//         limit: req.body.limit,
//         term: req.body.term,
//         location: req.body.location,
//       },
//     })
//     .then(response => res.send(response.data.businesses.map((business) => {
//       const {
//         id, name, coordinates, rating, image_url, categories, review_count,
//       } = business;
//       return ({
//         id,
//         name,
//         coordinates,
//         rating,
//         image_url,
//         categories,
//         review_count,
//       });
//     })))
//     .catch(error => console.error(error)));
// };
