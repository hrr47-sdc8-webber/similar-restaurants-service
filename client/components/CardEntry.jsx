import React from 'react';

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore, category, description, neighborhood
}) => (
  <div>
    <img src="http://lorempixel.com/output/food-q-c-278-222-4.jpg" alt="" />
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

export default CardEntry;
