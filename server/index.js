const express = require('express');
const db = require('../database');

const app = express();
const port = 3004;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send();
});

app.get('/zagat/restaurants/:id', (req, res) => {
  const args1 = [req.params.id];
  db.getTitle(args1, (err1, data1) => {
    const restaurant = data1[0];
    if (err1) {
      res.status(404).send('error in getting the title info');
    } else {
      const args2 = [restaurant.category, restaurant.neighborhood, args1[0]];
      db.getSimilar(args2, (err2, data2) => {
        const similar = data2;
        if (err2) {
          res.status(404).send('error in getting similar restaurants');
        } else {
          res.status(200).send({ restaurant, similar });
        }
      });
    }
  });
});

app.get('/zagat/photos/:id', (req, res) => {
  const args = [req.params.id];
  db.getPhotos(args, (err, data) => {
    if (err) {
      res.status(404).send('error in getting their photos');
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
