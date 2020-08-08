import React from 'react';
// eslint-disable-next-line import/extensions
import CardEntry from './CardEntry.jsx';

const CardsList = ({ similarRestaurants, photos }) => {
  //console.log({photos})
  return (
    <div>
      {similarRestaurants.map((restaurant) => (
        <CardEntry
          key={restaurant.rid}
          id={restaurant.rid}
          name={restaurant.name}
          price={restaurant.price}
          ratingLabel={restaurant.rating_label}
          ratingScore={restaurant.rating_score}
          category={restaurant.category}
          description={restaurant.description}
          neighborhood={restaurant.neighborhood}
          photos={photos}
        />
      ))}
    </div>
  );
};

export default CardsList;
