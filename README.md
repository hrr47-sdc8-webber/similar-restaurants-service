# Zigat.com similar restaurants module
> This module shows similar restaurants to the one displayed on a page by category and neighborhood. It's rendered at the bottom of the page above the footer.

## Related Projects
  - https://github.com/FEC-7-Stevens/photo-carousel-service
  - https://github.com/FEC-7-Stevens/info-sidebar-service
  - https://github.com/FEC-7-Stevens/tips-recommendations-service

## Table of Contents
1. [Usage](#Usage)
2. [Requirements](#Requirements)
3. [Development](#Development)
4. [Screenshots](#Screenshots)

## Usage
> Example URL: http://localhost:3004/2/

To initialize the page, in two separate terminal windows:

```sh
npm start
npm run build
```

If there are no similar restaurants the module doesn't render.

### API

Use the following routes for all requests to the server:

## GET /restaurants/:id

A GET request to /restaurants/:id will fetch an object containing information on the current restaurant, similar restaurants (based on category and neighborhood), and photos associated with the similar restaurants.

## POST /restaurants

A POST request to /restaurants will add a new restaurant to the database. It is extremely important that the request body contains the following properties with corresponding values:
 - name
 - price // represented as $, $$, $$$, $$$$, or $$$$
 - rating_label // "Service", "Food", etc.
 - rating_score // a string representation of a decimal number below five, rounded to nearest tenths digit, e.g. 4.2
 - description
 - category // "Italian", "Indian", etc.
 - url_handle // must be unique!
 - neighborhood

## POST /restaurants/:id/images

A POST request to /restaurants/:id/images will add a photo for an existing restaurant. The request body must contain a url property with the corresponding url.

## PUT /restaurants/:id

A PUT request to /retaurants/:id will update the selected restaurant's existing record: the request body contains an object with any number of existing properties (listed above) along with desired new values.

## DELETE /restaurants/:id

A DELETE request to /restaurants/:id will first remove all photos associated with a location before removing that location from the restaurants database.


## Requirements
- Node v12.18.1
  - https://nodejs.org/
- MySQL v5.7.31
  - https://dev.mysql.com/

## Development

### Installing Dependencies
From within this repository's root directory:
```sh
npm install
```

### Database Creation and Seeding
First create the schema, then add 700 restaurants data with relative photos.
```sh
npm run schema
npm run seed
```

### Development Enviroment
In two separate terminal windows:
```sh
npm run start:dev
npm run build:dev
```

### Testing
Using Jest and Enzyme.
```sh
npm test
```

## Screenshots

### Full grid of six

![Alt ](/screenshots/similar-grid-6.png?raw=true "Similar restaurants full grid of six")

### Grid of four

![Alt ](/screenshots/similar-grid-4.png?raw=true "Similar restaurants grid of four")

### Grid of two

![Alt ](/screenshots/similar-grid-2.png?raw=true "Similar restaurants grid of two")

### One restaurant has no photos
A placeholder image is rendered.

![Alt ](/screenshots/similar-with-exception.png?raw=true "One restaurant has no photos")
