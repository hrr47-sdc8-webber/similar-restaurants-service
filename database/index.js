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

const getTitle = (args, callback) => {
  const query = 'SELECT name, category FROM restaurants WHERE id = ?;';
  connection.query(query, args, callback);
};

module.exports = {
  connection,
  seedDataRestaurants,
  seedDataPhotos,
  getTitle,
};
