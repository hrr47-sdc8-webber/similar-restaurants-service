const mysql = require('mysql');
const dbConfig = require('./dbconfig.js');

const connection = mysql.createConnection(dbConfig);

connection.connect();

const seedDataRestaurants = (name, price, ratingLabel, ratingScore,
  description, urlHandle, category, neighborhood) => {
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

// Update one record to have consistency across all our services
const updateOne = () => {
  const query = `UPDATE restaurants SET name = "Stevens' Kitchen", category = "Greek", neighborhood = "Financial District" WHERE rid = 1;`;
  connection.query(query, (err, success) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(success);
    }
  });
}

// Given a restaurant id, populate name, category, and neighborhood in title.
const getTitle = (args) => {
  const query = 'SELECT name, category, neighborhood FROM restaurants WHERE rid = ?;';
  return new Promise((resolve, reject) => {
    connection.query(query, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

// Given a category and a neighborhood, populate the grid with max 6 cards.
// With similar (same category) restaurants nearby (same neighborhood).
const getSimilar = (args) => {
  const query = 'SELECT DISTINCT rid, name, price, rating_label, rating_score, description, category, neighborhood FROM restaurants WHERE category = ? AND neighborhood = ? AND rid != ? LIMIT 6;';
  return new Promise((resolve, reject) => {
    connection.query(query, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

// Given a restaurant id, for each card, populate their photos.
const getPhotos = (args) => {
  const query = 'SELECT url, restaurant_id FROM photos WHERE restaurant_id = ?;';
  return new Promise((resolve, reject) => {
    connection.query(query, args, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const addRestaurant = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO restaurants (${keys[0]}, ${keys[1]}, ${keys[2]}, ${keys[3]}, ${keys[4]}, ${keys[5]}, ${keys[6]}, ${keys[7]}) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, values, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const addPhoto = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO photos (${keys[0]}, ${keys[1]}) VALUES (?, ?)`, values, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const deleteRestaurant = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM restaurants WHERE rid = ${id}`, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const deletePhotos = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM photos WHERE restaurant_id = ?', [id], (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

const updateRestaurant = (obj, id) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let query = '';
  for (let i = 0; i < keys.length; i++) {
    if (query !== '') { query += ', '; }
    query += `${keys[i]} = '${values[i]}'`;
  }
  return new Promise((resolve, reject) => {
    connection.query(`UPDATE restaurants SET ${query} WHERE rid = ${id}`, (err, data) => {
      if (err) {
        reject(err.message);
      }
      resolve(data);
    });
  });
};

module.exports = {
  connection,
  seedDataRestaurants,
  seedDataPhotos,
  updateOne,
  getTitle,
  getSimilar,
  getPhotos,
  addRestaurant,
  addPhoto,
  deleteRestaurant,
  deletePhotos,
  updateRestaurant,
};
