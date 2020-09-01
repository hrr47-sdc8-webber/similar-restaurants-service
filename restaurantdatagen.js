const fs = require('fs');
const faker = require('faker');

const price = ['$', '$$', '$$$', '$$$$', '$$$$$'];
const rating = ['3.8', '3.9', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0'];
const ratingLabel = ['Food', 'Decor', 'Service'];
const category = ['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Vegetarian', 'Vegan', 'Mediterranean', 'Spanish', 'Soul Food', 'Turkish', 'Moroccan', 'Middle Eastern', 'Cajun', 'Malaysian', 'Peruvian', 'Puerto Rican', 'Russian', 'Jamaican', 'Brazilian', 'Taiwanese', 'Armenian', 'Caribbean', 'Korean', 'Cuban', 'Bavarian', 'Ethiopian', 'Belgian', 'Egyptian', 'Haitian', 'Cantonese', 'Hawaiian', 'Asian Fusion', 'Cafe', 'American', 'Contemporary', 'Tapas', 'Seafood', 'Comfort Food', 'Tex-Mex', 'BBQ', 'Filipino', 'Indonesian', 'Persian', 'Scandanavian', 'Smoothies'];
const neighborhood = [];

for (let n = 0; n < 50000; n++) {
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

const categoryData = fs.createWriteStream('restaurantcategories.csv');
const neighborhoodData = fs.createWriteStream('restaurantneighborhoods.csv');
const restData = fs.createWriteStream('restaurantdata.csv');
const photoData = fs.createWriteStream('restaurantphotos.csv');

const categoryDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok = true;
    while (ok && i <= category.length) {
      let cat = `${category[i - 1]}\n`;
      if (i === category.length) {
        i++;
        categoryData.write(cat, 'utf8', cb);
      } else {
        if (i === 1) {
          cat = `c_name\n${cat}`;
        }
        i++;
        ok = categoryData.write(cat, 'utf8');
      }
    }
    if (i <= category.length) {
      categoryData.once('drain', write);
    }
  }
  write();
};

const neighborhoodDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok = true;
    while (ok && i <= neighborhood.length) {
      let neighb = `${neighborhood[i - 1]}\n`;
      if (i === neighborhood.length) {
        i++;
        neighborhoodData.write(neighb, 'utf8', cb);
      } else {
        if (i === 1) {
          neighb = `n_name\n${neighb}`;
        }
        i++;
        ok = neighborhoodData.write(neighb, 'utf8');
      }
    }
    if (i <= neighborhood.length) {
      neighborhoodData.once('drain', write);
    }
  }
  write();
};

const restDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok = true;
    while (ok && i <= 10000000) {
      let rest = `${faker.commerce.color()} ${faker.name.firstName()} ${faker.lorem.word()}|${faker.helpers.randomize(price)}|${faker.helpers.randomize(rating)}|${faker.helpers.randomize(ratingLabel)}|${faker.lorem.sentence()}|${Math.floor(Math.random() * category.length) + 1}|${Math.floor(Math.random() * neighborhood.length) + 1}\n`;
      if (i === 10000000) {
        i++;
        restData.write(rest, 'utf8', cb);
      } else {
        if (i === 1) {
          rest = `name|price|rating_score|rating_label|description|category|neighborhood\n${rest}`;
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
        photos += `${i}|https://sdc-similar-restaurants.s3-us-west-2.amazonaws.com/${num}.jpg\n`;
      }
      if (i === 10000000) {
        i++;
        photoData.write(photos, 'utf8', cb);
      } else {
        if (i === 1) {
          photos = `restaurant_id|url\n${photos}`;
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

console.log('Generating category data...')
categoryDataGen((err) => {
  if (err) {
    console.log(err);
  }
  console.log('Generating neighborhood data...');
  neighborhoodDataGen((err) => {
    if (err) {
      console.log(err);
    }
    console.log('Generating restaurant data...');
    restDataGen((err) => {
      if (err) {
        console.log(err);
      }
      console.log('Generating photo data...');
      photoDataGen((err) => {
        if (err) {
          console.log(err);
        }
        const end = new Date() - start;
        console.log(`Data generation complete. Total execution time: ${end}ms`);
      });
    });
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