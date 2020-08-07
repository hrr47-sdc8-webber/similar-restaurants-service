const faker = require('faker');
const db = require('./database');

let id = 1;
while (id <= 601) {
  const firstName = faker.name.firstName();
  const color = faker.commerce.color();
  const word = faker.lorem.word();
  const name = `${firstName} ${color} ${word}`;
  const price = faker.helpers.randomize(['$', '$$', '$$$', '$$$$']);
  const ratingLabel = 'Food';
  const ratingScore = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
  const description = faker.lorem.sentence();
  const urlHandle = faker.helpers.slugify(name);
  const category = faker.helpers.randomize(['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Vegetarian', 'Vegan']);
  const neighborhood = faker.helpers.randomize(['Mission', 'Haight Ashbury', 'Hayes Valley', 'Castro', 'North Beach', 'Financial District', 'Marina', 'Fillmore', 'Pacific Heights', 'Noe Valley']);
  // eslint-disable-next-line max-len
  db.seedData(name, price, ratingLabel, ratingScore, description, urlHandle, category, neighborhood);
  id += 1;
}


// https://zigat.s3-us-west-1.amazonaws.com/image1.jpg