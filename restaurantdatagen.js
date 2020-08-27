const fs = require('fs');
const faker = require('faker');

const price = ['$', '$$', '$$$', '$$$$', '$$$$$'];
const rating = ['3.8', '3.9', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0'];
const ratingLabel = ['Food', 'Decor', 'Service'];
const category = ['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Greek', 'Vegetarian', 'Vegan'];
const neighborhood = [];

for (let n = 0; n < 1000; n++) {
  if (n % 10 === 0) {
    neighborhood.push(`${faker.name.lastName()}${faker.address.citySuffix()}`);
  } else if (n % 7 === 0) {
    neighborhood.push(`${faker.address.cityPrefix()} ${faker.random.word()}`);
  } else if (n % 5 === 0) {
    neighborhood.push(`${faker.address.streetName()}`);
  } else if (n % 3 === 0) {
    neighborhood.push(`${faker.name.lastName()} ${faker.address.streetSuffix()}`);
  } else if (n % 2 === 0) {
    neighborhood.push(`${faker.address.city()}`);
  } else {
    neighborhood.push(`${faker.address.cityPrefix()} ${faker.address.county()}`);
  }
}

const start = new Date();

const restData = fs.createWriteStream('restaurantdata.csv');
const photoData = fs.createWriteStream('restaurantphotos.csv');

const restDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok = true;
    while (ok && i <= 10000000) {
      let rest = `${faker.commerce.color()} ${faker.name.firstName()} ${faker.lorem.word()},${faker.helpers.randomize(price)},${faker.helpers.randomize(rating)},${faker.helpers.randomize(ratingLabel)},${faker.lorem.sentence()},${faker.helpers.randomize(category)},${faker.helpers.randomize(neighborhood)}\n`;
      if (i === 10000000) {
        i++;
        restData.write(rest, 'utf8', cb);
      } else {
        if (i === 1) {
          rest = `name,price,rating_sore,rating_label,description,category,neighborhood\n${rest}`;
        }
        i++;
        ok = restData.write(rest, 'utf8');
      }
    }
    if (i <= 10000000) {
      restData.once('drain', write);
    }
  }
  write();
};

const photoDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok = true;
    while (ok && i <= 10000000) {
      const numPhotos = Math.floor(Math.random() * 6) + 1;
      let photos = '';
      for (let y = 0; y < numPhotos; y++) {
        const num = Math.floor(Math.random() * 500) + 1;
        photos += `${i},https://sdc-similar-restaurants.s3-us-west-2.amazonaws.com/${num}.jpg\n`;
      }
      if (i === 10000000) {
        i++;
        photoData.write(photos, 'utf8', cb);
      } else {
        if (i === 1) {
          photos = `restaurant_id,url\n${photos}`;
        }
        i++;
        ok = photoData.write(photos, 'utf8');
      }
    }
    if (i <= 10000000) {
      photoData.once('drain', write);
    }
  }
  write();
};

restDataGen((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Restaurant data generated. Generating photo data...');
  photoDataGen((error) => {
    if (error) {
      console.log(err);
    }
    const end = new Date() - start;
    console.log(`Data generation complete. Total execution time: ${end}ms`);
  });
});

/*
id: i,
        name: faker.random.words(),
        price: faker.helpers.randomize(price),
        rating: faker.helpers.randomize(rating),
        ratingLabel: faker.helpers.randomize(ratingLabel),
        description: faker.lorem.sentence(),
        category: faker.helpers.randomize(category),
        neighborhood: faker.helpers.randomize(neighborhood), */

/* 'Hell\'s Kitchen', 'Chelsea', 'Murray Hill', 'West Harlem', 'East Harlem', 'Upper West Side', 'Upper East Side', 'Greenwich Village', 'East Village', 'Lower East Side', 'Meatpacking', 'West Village', 'Williamsburg', 'Prospect Park', 'Astoria', 'Mission', 'Haight Ashbury', 'Hayes Valley', 'Castro', 'North Beach', 'FiDi', 'Financial District', 'Marina', 'Fillmore', 'Pacific Heights', 'Noe Valley', 'Evanston', 'Lincoln Park', 'Englewood', 'Austin', 'Little Village', 'Logan Square', 'Magnificent Mile', 'Lake View', 'Hyde Park', 'Wicker Park', 'River North', 'Chinatown', 'Des Peres', 'Central West End', 'Clifton Heights', 'Downtown New Haven', 'Gladstone', 'North Kansas City', 'Westport', 'The Plaza', 'Brookside', 'West Bottoms' */