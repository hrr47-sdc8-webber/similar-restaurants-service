const faker = require('faker');
const db = require('./database');

let rId = 1;
while (rId <= 701) {
  const firstName = faker.name.firstName();
  const color = faker.commerce.color();
  const word = faker.lorem.word();
  const name = faker.helpers.randomize([`${firstName} ${color} ${word}`, `${color} ${firstName} ${word}`, `${word} ${color} ${firstName}`]);
  const price = faker.helpers.randomize(['$', '$$', '$$$', '$$$$', '$$$$$']);
  const ratingLabel = faker.helpers.randomize(['Food', 'Decor', 'Service']);
  const ratingScore = (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
  const description = faker.lorem.sentence();
  const urlHandle = faker.helpers.slugify(name);
  const category = faker.helpers.randomize(['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Vegetarian', 'Vegan']);
  const neighborhood = faker.helpers.randomize(['Mission', 'Haight Ashbury', 'Hayes Valley', 'Castro', 'North Beach', 'Financial District', 'Marina', 'Fillmore', 'Pacific Heights', 'Noe Valley']);
  db.seedDataRestaurants(name, price, ratingLabel, ratingScore,
    description, urlHandle, category, neighborhood);
  rId += 1;
}

let pId = 1;
while (pId <= 3501) {
  const imageId = Math.floor(Math.random() * (80 - 1) + 1);
  const url = `https://zigat.s3-us-west-1.amazonaws.com/image${imageId}.jpg`;
  const restaurantId = Math.floor(Math.random() * (691 - 1) + 1);
  db.seedDataPhotos(url, restaurantId);
  pId += 1;
}
