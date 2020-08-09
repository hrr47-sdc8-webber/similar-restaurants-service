import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import PhotosCarousel from './PhotosCarousel.jsx';

const Card = styled.div`
  background-color: gray;
  width: 720px;
  height: 258px;
  margin-bottom: 40px;
  margin-right: 40px;
  `;

const CardText = styled.div`
  background-color: white;
  width: 360px;
  height: 178px;
  padding: 20px 24px;
  float: right;
  `;

const CardImg = styled.div`
  background-color: purple;
  width: 272px;
  height: 218px;
  float: left;
  `;

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore, category, description, neighborhood, photos
}) => {
  //console.log({photos})
  return (
    <Card>
      {/* <img src="http://lorempixel.com/output/food-q-c-278-222-4.jpg" alt="" /> */}
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
