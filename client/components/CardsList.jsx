import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import CardEntry from './CardEntry.jsx';

const Grid = styled.div`
  width: 1440px;
  height: 774px;
  display: flex;
  flex-wrap: wrap;
  `;

const CardsList = ({ similarRestaurants, photos, handleClick }) => {
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
          handleClick={handleClick}
        />
      ))}
    </Grid>
  );
};

export default CardsList;
