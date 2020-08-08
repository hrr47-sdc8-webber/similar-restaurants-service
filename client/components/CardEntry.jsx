import React from 'react';
// eslint-disable-next-line import/extensions
import PhotosCarousel from './PhotosCarousel.jsx';

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore, category, description, neighborhood, photos
}) => {
  //console.log({photos})
  return (
    <div>
      {/* <img src="http://lorempixel.com/output/food-q-c-278-222-4.jpg" alt="" /> */}
      <PhotosCarousel photos={photos} />
      <div>{name}</div>
      <div>{category}</div>
      <div>{neighborhood}</div>
      <div>{price}</div>
      {/* <img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"/> */}
      <div>{ratingLabel}</div>
      <div>{ratingScore}</div>
      <div>{description}</div>
    </div>
  );
};

export default CardEntry;
