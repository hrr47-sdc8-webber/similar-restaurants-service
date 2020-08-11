import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

CardsList.propTypes = {
  similarRestaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CardsList;
