import React from 'react';
// eslint-disable-next-line import/extensions
import CardEntry from './CardEntry.jsx';

const CardsList = ({ similarRestaurants }) => (
  <div>
    {similarRestaurants.map((restaurant) => (
      <CardEntry
        key={restaurant.id}
        id={restaurant.id}
        name={restaurant.name}
        price={restaurant.price}
        ratingLabel={restaurant.rating_label}
        ratingScore={restaurant.rating_score}
        category={restaurant.category}
        description={restaurant.description}
        neighborhood={restaurant.neighborhood}
      />
    ))}
    <CardEntry />
  </div>
);

export default CardsList;
