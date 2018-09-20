require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8081;
const history = require('connect-history-api-fallback');
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
const yelpRoutes = require('./routes/yelpRoutes.js');

app.use('/api/users', usersRoutes(knex));
app.use('/api/reviews', reviewsRoutes(knex));
app.use('/api/login', loginRoutes);
app.use('/api/yelp', yelpRoutes);

// history must go after other endpoints
app.use(history());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('src/public'));
  app.use(express.static('build'));
}

app.listen(PORT, () => {
  console.log(`Server up on http://localhost:${PORT}`);
});
