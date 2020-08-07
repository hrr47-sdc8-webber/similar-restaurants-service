const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zagat',
});

connection.connect();

// eslint-disable-next-line max-len
const seedDataRestaurants = (name, price, ratingLabel, ratingScore, description, urlHandle, category, neighborhood) => {
  const query = `INSERT INTO restaurants (name, price, rating_label, rating_score, description, url_handle, category, neighborhood) VALUES ("${name}", "${price}", "${ratingLabel}", "${ratingScore}", "${description}", "${urlHandle}", "${category}", "${neighborhood}");`;
  connection.query(query, (err, success) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(success);
    }
  });
};

const seedDataPhotos = (url, restaurantId) => {
  const query = `INSERT INTO photos (url, restaurant_id) VALUES ("${url}", ${restaurantId});`;
  connection.query(query, (err, success) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(success);
    }
  });
};

// Given a restaurant id, populate name, category, and neighborhood in title.
const getTitle = (args, callback) => {
  const query = 'SELECT name, category, neighborhood FROM restaurants WHERE id = ?;';
  connection.query(query, args, callback);
};

// Given a category and a neighborhood, populate the grid with max 6 cards.
// With similar (same category) restaurants nearby (same neighborhood).
const getSimilar = (args, callback) => {
  const query = 'SELECT name, price, rating_label, rating_score, description, category, neighborhood FROM restaurants WHERE category = ? AND neighborhood = ? LIMIT 6;';
  connection.query(query, args, callback);
};

// Given a restaurant id, for each card, populate their photos.
const getPhotos = (args, callback) => {
  const query = 'SELECT url FROM photos WHERE restaurant_id = ?;';
  connection.query(query, args, callback);
};

module.exports = {
  connection,
  seedDataRestaurants,
  seedDataPhotos,
  getTitle,
  getSimilar,
  getPhotos,
};
