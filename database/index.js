const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'zagat',
});

connection.connect();

// eslint-disable-next-line max-len
const seedData = (name, price, ratingLabel, ratingScore, description, urlHandle, category, neighborhood) => {
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

module.exports = {
  connection,
  seedData,
};
