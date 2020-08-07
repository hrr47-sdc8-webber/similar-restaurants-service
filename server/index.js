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
  const args = [req.params.id];
  db.getTitle(args, (err, data) => {
    if (err) {
      res.status(404).send('error in getting the title');
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
