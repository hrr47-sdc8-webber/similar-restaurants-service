# Re:View Similar Restaurants Module
Welcome to Re:View, your restaurant resource! This module displays up to six "similar restaurants" to the primary restaurant as accessed through the URL. "Similar" is here defined as "shares the same cuisine and neighborhood". The module renders at the bottom of the page, before the footer.

![Alt ](/screenshots/similar-grid-6.png?raw=true "Similar restaurants full grid of six")

## Related Projects
  - https://github.com/hrr47-sdc8-webber/photo-carousel-service
  - https://github.com/hrr47-sdc8-webber/info-sidebar-service
  - https://github.com/hrr47-sdc8-webber/tips-recommendations-service

## Table of Contents
1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Screenshots](#Screenshots)

## Usage
> Example URL: ```http://localhost:3004/2/```

_**IMPORTANT:**_ Before running the server in the dev environment, you will need to initialize and seed the database. Please see all information related to data generation below.

Once your database is seeded and up and running, to initialize the page, run the following in two separate terminal windows:

```sh
npm start
npm run build
```

Direct your browser to ```http://localhost:3004/:id/```, replacing ```:id``` with any desired location ID between 1 and 10000000. 

> Note: The module will not render unless there are at least two similar restaurants.

## API

As part of back-end renovation, our team has implemented the following API routes. Should the front-end team choose to add further CRUD functionality client-side, please use the following:

### ```GET``` to ```/restaurants/:id```

A ```GET``` request to ```/restaurants/:id``` will fetch an object containing information on the current restaurant, similar restaurants (based on category and neighborhood), and photos associated with each similar restaurant.

### ```POST``` to ```/restaurants```

A ```POST``` request to ```/restaurants``` will add a new restaurant to the database. It is extremely important that the request body object contains the following properties with corresponding values:
 - ```name``` // String
 - ```price``` // String, represented as  ```'$'```, ```'$$'```, ```'$$$'```, ```'$$$$'```, or ```'$$$$$'```
 - ```rating_label``` // String, ```'Service'```, ```'Food'```, etc.
 - ```rating_score``` // String, a representation of a decimal number below five, rounded to nearest tenths digit, e.g. ```'4.2'```
 - ```description``` // String
 - ```category``` // Number, representing the corresponding category ID
 - ```neighborhood``` // Number, representing the corresponding neighborhood ID

### ```POST``` to ```/restaurants/:id/images```

A ```POST``` request to ```/restaurants/:id/images``` will add a photo for an existing restaurant. The request body need only contain a url property with the corresponding url.

### ```PUT``` to ```/restaurants/:id```

A ```PUT``` request to ```/retaurants/:id``` will update the selected restaurant's existing record: the request body must contain an object with any number of existing properties (listed above, under ```GET```) along with desired new values. For example

```
{ name: 'New Name' }
{ name: 'New Name', description: 'New description.' }
{ price: '$', neighborhood: 6 }
```
Any number of the existing properties will be accepted by the route.

### ```DELETE``` to ```/restaurants/:id```

A DELETE request to ```/restaurants/:id``` will first remove all photos associated with a location before removing that location from the restaurants database.


## Requirements
- Node v12.18.1
  - https://nodejs.org/
- PostgreSQL v12.4
  - https://www.postgresql.org/

## Development

### Installing Dependencies
From within this repository's root directory, run the following:
```sh
npm install
```

### Data Generation
In order to seed the database, you first need to generate the data by running the following:
```sh
node restaurantdatagen.js
```
This will create separate CSV files in the project's root directory for each PostgreSQL table: neighborhoods, categories, restaurants, and photos. In order to load the schema into the database, either run the ```psql.sql``` file (also located in the project's root directory) in the terminal, or manually define each table in the ```psql``` shell as written in ```psql.sql```. 

Then, from the ```psql``` shell, run COPY commands on each CSV file in turn, seeding all tables in the following order: Neighborhoods, Categories, Restaurants, Photos. For example:

```sh
COPY restaurants(name, price, rating_score, rating_label, description, category, neighborhood) FROM '/path/to/restaurantdata.csv' DELIMITER '|' CSV HEADER;
```
Once all CSV files have been properly copied, your PostgreSQL database will be seeded with 10M restaurants, 50K neighborhoods, 58 cuisine types, and around 35M preview photo urls.

### Development Enviroment
In two separate terminal windows, run the following:
```sh
npm run start:dev
npm run build:dev
```

### Testing
Using Jest and Enzyme.
```sh
npm test
```
Should you alter the front-end code in such a way that changes the component snapshot, your Jest tests will fail. In order to update all snapshots, run the following:

```sh
npm test -- -u
```

## Screenshots

### Full grid of six

![Alt ](/screenshots/similar-grid-6.png?raw=true "Similar restaurants full grid of six")

### Grid of four

![Alt ](/screenshots/similar-grid-4.png?raw=true "Similar restaurants grid of four")

### Grid of two

![Alt ](/screenshots/similar-grid-2.png?raw=true "Similar restaurants grid of two")

### If one restaurant has no photos...
... a placeholder image is rendered.

![Alt ](/screenshots/similar-with-exception.png?raw=true "One restaurant has no photos")
