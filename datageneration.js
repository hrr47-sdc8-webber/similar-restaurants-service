const fs = require('fs');
const faker = require('faker');

const price = ['$', '$$', '$$$', '$$$$', '$$$$$'];
const rating = ['3.8', '3.9', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0'];
const ratingLabel = ['Food', 'Decor', 'Service'];
const category = ['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Greek', 'Vegetarian', 'Vegan'];
const neighborhood = ['Hell\'s Kitchen', 'Chelsea', 'Murray Hill', 'West Harlem', 'East Harlem', 'Upper West Side', 'Upper East Side', 'Greenwich Village', 'East Village', 'Lower East Side', 'Meatpacking', 'West Village', 'Williamsburg', 'Prospect Park', 'Astoria'];

const data = fs.createWriteStream('data.txt');

const dataGen = (cb) => {
  let i = 10000000;
  const write = () => {
    let ok = true;
    while (ok && i >= 0) {
      let rest = {
        id: i,
        name: faker.random.words(),
        price: faker.helpers.randomize(price),
        rating: faker.helpers.randomize(rating),
        ratingLabel: faker.helpers.randomize(ratingLabel),
        description: faker.lorem.sentence(),
        category: faker.helpers.randomize(category),
        neighborhood: faker.helpers.randomize(neighborhood),
      };
      if (i === 0) {
        rest = `${JSON.stringify(rest)}]`;
        data.write(rest, 'utf8', cb);
      } else {
        if (i === 10000000) {
          rest = `[${JSON.stringify(rest)},`;
        } else {
          rest = `${JSON.stringify(rest)},`;
        }
        ok = data.write(rest, 'utf8');
      }
      i--;
    }
    if (i >= 0) {
      data.once('drain', write);
    }
  };
  write();
};

dataGen(() => console.log('Data generated'));
