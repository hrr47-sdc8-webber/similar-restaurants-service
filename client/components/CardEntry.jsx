import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import PhotosCarousel from './PhotosCarousel.jsx';

const Card = styled.div`
  background-color: rgb(250,250,250);
  width: 720px;
  height: 258px;
  display: flex;
  `;

const CardText = styled.div`
  background-color: white;
  width: 360px;
  height: 178px;
  padding: 20px 24px;
  float: right;
  `;

const CardImg = styled.div`
  width: 272px;
  height: 218px;
  float: left;
  `;

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore, category, description, neighborhood, photos
}) => {
  return (
    <Card>
      <CardImg>
        <PhotosCarousel photos={photos} />
      </CardImg>
      <CardText>
        <div>{name}</div>
        <div>{category}</div>
        <div>{neighborhood}</div>
        <div>{price}</div>
        {/* <img src="https://www.zagat.com/assets/img/z-logo-icon-red.svg"/> */}
        <div>{ratingLabel}</div>
        <div>{ratingScore}</div>
        <div>{description}</div>
      </CardText>
    </Card>
  );
};

export default CardEntry;
