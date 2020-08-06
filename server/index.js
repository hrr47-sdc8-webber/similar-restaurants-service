const express = require('express');

const app = express();
const port = 3004;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send();
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at http://localhost:${port}`);
});
