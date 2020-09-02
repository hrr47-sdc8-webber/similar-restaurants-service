const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const port = 3004;

app.use('/:id', express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/restaurants/:id', (req, res) => {
  db.fetchRestaurants(req.params.id)
    .then((data) => res.status(200).send(data))
    .catch(() => res.status(500).send('An error occurred'));
});

/* //  POST request: add a new restaurant
app.post('/restaurants', (req, res) => {
  db.addRestaurant(req.body)
    .then(() => res.status(200).send('Sucessfully posted new restaurant'))
    .catch(() => res.status(500).send('Unable to post'));
});

//  POST request: add new images to an existing restaurant.
app.post('/restaurants/:id/images', (req, res) => {
  db.addPhoto({ restaurant_id: req.params.id, url: req.body.url })
    .then(() => res.status(200).send('Successfully posted photo'))
    .catch(() => res.status(500).send('Unable to post'));
});

//  PUT request: update an existing restaurant based on body of request
app.put('/restaurants/:id', (req, res) => {
  db.updateRestaurant(req.body, req.params.id)
    .then(() => res.status(200).send('Successfully updated restaurant'))
    .catch(() => res.status(500).send('Failed to update'));
});

//  DELETE: delete a restaurant (and all associated photos)
app.delete('/restaurants/:id', (req, res) => {
  db.deletePhotos(req.params.id)
    .then(() => {
      db.deleteRestaurant(req.params.id)
        .then(() => {
          res.status(200).send('Successfully deleted restaurant');
        });
    })
    .catch(() => res.status(500).send('Unable to delete'));
}); */

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
