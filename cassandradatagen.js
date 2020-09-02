const fs = require('fs');
const faker = require('faker');

const price = ['$', '$$', '$$$', '$$$$', '$$$$$'];
const rating = ['3.8', '3.9', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9', '5.0'];
const ratingLabel = ['Food', 'Decor', 'Service'];
const category = ['Mexican', 'French', 'Italian', 'Californian', 'Japanese', 'Chinese', 'Thai', 'Vietnamese', 'Indian', 'German', 'Spanish', 'Pizza', 'Greek', 'Vegetarian', 'Vegan', 'Mediterranean', 'Spanish', 'Soul Food', 'Turkish', 'Moroccan', 'Middle Eastern', 'Cajun', 'Malaysian', 'Peruvian', 'Puerto Rican', 'Russian', 'Jamaican', 'Brazilian', 'Taiwanese', 'Armenian', 'Caribbean', 'Korean', 'Cuban', 'Bavarian', 'Ethiopian', 'Belgian', 'Egyptian', 'Haitian', 'Cantonese', 'Hawaiian', 'Asian Fusion', 'Cafe', 'American', 'Contemporary', 'Tapas', 'Seafood', 'Comfort Food', 'Tex-Mex', 'BBQ', 'Filipino', 'Indonesian', 'Persian', 'Scandanavian', 'Smoothies'];
const neighborhood = [];

for (let n = 0; n < 50000; n++) {
  if (n % 10 === 0) {
    neighborhood.push([`${faker.name.lastName()}${faker.address.citySuffix()}`, n]);
  } else if (n % 7 === 0) {
    neighborhood.push([`${faker.address.cityPrefix()} ${faker.random.word()}`, n]);
  } else if (n % 5 === 0) {
    neighborhood.push([`${faker.address.streetName()}`, n]);
  } else if (n % 3 === 0) {
    neighborhood.push([`${faker.name.lastName()} ${faker.address.streetSuffix()}`, n]);
  } else if (n % 2 === 0) {
    neighborhood.push([`${faker.address.city()}`, n]);
  } else {
    neighborhood.push([`${faker.address.cityPrefix()} ${faker.address.county()}`, n]);
  }
}

const start = new Date();

const cassandraRest = fs.createWriteStream('cassandrarest.csv');
const cassandraNeighb = fs.createWriteStream('cassandraneighb.csv');

const cassandraDataGen = (cb) => {
  let i = 1;
  function write() {
    let ok1 = true;
    let ok2 = true;
    while (ok1 && ok2 && i <= 10000000) {
      let photos = '[';
      const photoNum = Math.floor(Math.random() * 6) + 1;
      for (let y = 0; y < photoNum; y++) {
        if (photos !== '[') { photos += ','; }
        const num = Math.floor(Math.random() * 500) + 1;
        photos += `https://sdc-similar-restaurants.s3-us-west-2.amazonaws.com/${num}.jpg`;
        if (y === photoNum - 1) { photos += ']'; }
      }
      const name = `${faker.commerce.color()} ${faker.name.firstName()} ${faker.lorem.word()}`;
      const catIndex = Math.floor(Math.random() * category.length);
      const cat = category[catIndex];
      const neighbDuple = faker.helpers.randomize(neighborhood);
      const neighb = neighbDuple[0];
      const neighbId = neighbDuple[1];
      const pr = faker.helpers.randomize(price);
      const rate = faker.helpers.randomize(rating);
      const label = faker.helpers.randomize(ratingLabel);
      const desc = faker.lorem.sentence();

      let restEntry = `${i}|${name}|${cat}|${catIndex + 1}|${neighb}|${neighbId}\n`;
      let neighbEntry = `${neighbId}|${catIndex + 1}|${i}|${name}|${pr}|${rate}|${label}|${desc}|${photos}\n`;
      if (i === 10000000) {
        i++;
        cassandraRest.write(restEntry, 'utf8');
        cassandraNeighb.write(neighbEntry, 'utf8', cb);
      } else {
        if (i === 1) {
          restEntry = `rid|name|category|category_id|neighborhood|neighborhood_id\n${restEntry}`;
          neighbEntry = `neighborhood_id|category_id|rid|name|price|rating_score|rating_label|description|photos\n${neighbEntry}`;
        }
        i++;
        ok1 = cassandraRest.write(restEntry, 'utf8');
        ok2 = cassandraNeighb.write(neighbEntry, 'utf8');
      }
    }
    if (i <= 10000000) {
      if (!ok1 && !ok2) {
        cassandraRest.once('drain', () => cassandraNeighb.once('drain', write));
      } else if (!ok1) {
        cassandraRest.once('drain', write);
      } else {
        cassandraNeighb.once('drain', write);
      }
    }
  }
  write();
};

console.log('Generating data for Cassandra... This might take a while...');

cassandraDataGen((err) => {
  if (err) {
    console.log(err);
  }
  const end = new Date() - start;
  console.log(`Data generated for Cassandra. Execution time: ${end}ms`);
});


/* if (n % 10 === 0) {
  neighborhood.push(`${faker.name.lastName()}${faker.address.citySuffix()}, ${faker.address.county()}, ${faker.address.country()}`);
} else if (n % 7 === 0) {
  neighborhood.push(`${faker.address.cityPrefix()} ${faker.random.word()}, ${faker.address.stateAbbr()}, ${faker.address.country()}`);
} else if (n % 5 === 0) {
  neighborhood.push(`${faker.address.streetName()}, ${faker.address.stateAbbr()}, ${faker.address.country()}`);
} else if (n % 3 === 0) {
  neighborhood.push(`${faker.name.lastName()} ${faker.address.streetSuffix()}, ${faker.address.state()}, ${faker.address.county()}`);
} else if (n % 2 === 0) {
  neighborhood.push(`${faker.address.city()}, ${faker.address.stateAbbr()}, ${faker.address.zipCode()}`);
} else {
  neighborhood.push(`${faker.address.cityPrefix()} ${faker.address.county()}, ${faker.address.country()}, ${faker.address.state()}`);
} */
