
// const axios = require('axios')

// const settings = require('../settings.json')

// const api = axios.create({
//   baseURL: 'https://api.yelp.com/v3',
//   headers: {
//     Authorization: `Bearer ${settings['YELP_API_KEY']}`,
//   },
// })

// module.exports = () => {

//     console.log('hi im here\n')
//     return api
//       .get('/businesses/search', {
//         params: {
//           limit: 10,
//           categories: 'coffee,coffeeroasteries,coffeeshops',
//           location: 'vancouver'
//         },
//       })
//       .then(res =>
//         res.data.businesses.map(business => {
//           console.log(business.name);
//           return {
//             name: business.name,
//             coords: business.coordinates,
//           }
//         })
//       )
//       .catch(error => console.error(error))
//   }
