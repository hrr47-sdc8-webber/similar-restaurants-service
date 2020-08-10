import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import CardEntry from './CardEntry.jsx';

const Grid = styled.div`
  background-color: yellow;
  width: 1440px;
  height: 774px;
  `;

const CardsList = ({ similarRestaurants, photos }) => {
  return (
    <Grid>
      {similarRestaurants.map((restaurant, index) => (
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
          photos={photos[index]}
        />
      ))}
    </Grid>
  );
};

export default CardsList;
