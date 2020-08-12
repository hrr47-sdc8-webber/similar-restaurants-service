const express = require('express');
const db = require('../database');

const app = express();
const port = 3004;

app.use('/:id', express.static('public'));
app.use(express.json());

app.get('/api/restaurants/:id', (req, res) => {
  const allData = {};
  const argsTitle = [req.params.id];
  return db.getTitle(argsTitle)
    .then((dataTitle) => {
      const restaurant = dataTitle[0];
      allData.restaurant = {
        name: restaurant.name,
        category: restaurant.category,
        neighborhood: restaurant.neighborhood,
      };
      const argsSimilar = [restaurant.category, restaurant.neighborhood, argsTitle[0]];
      return db.getSimilar(argsSimilar);
    })
    .then((dataSimilar) => {
      allData.similar = dataSimilar;
      const results = dataSimilar.map((item) => {
        const argsPhotos = [item.rid];
        return Promise.resolve(db.getPhotos(argsPhotos));
      });
      return Promise.all(results);
    })
    .then((dataPhotos) => {
      allData.photos = dataPhotos;
    })
    .then(() => {
      res.status(200).send(allData);
    })
    .catch(() => {
      res.status(404).send('error in getting the restaurants data');
    });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
