import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/extensions
import PhotosCarousel from './PhotosCarousel.jsx';

const Card = styled.div`
  background-color: rgb(250,250,250);
  width: 720px;
  height: 258px;
  display: flex;
  cursor: pointer;
  `;

const CardText = styled.div`
  background-color: white;
  width: 360px;
  height: 178px;
  padding: 20px 24px;
  float: right;
  color: #101820;
  `;

const Name = styled.div`
  letter-spacing: .086em;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline #b70038 solid;
  }
`;

const Details = styled.div`
  color: #656666;
  letter-spacing: .013em;
  font-size: 15px;
  line-height: 24px;
  `;

const RatingLabel = styled.span`
  letter-spacing: .061em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;

const RatingScore = styled.span`
  color: #b70038;
  letter-spacing: .061em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
`;

const Description = styled.div`
  padding-top: 3px;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: .013em;
`;

// const CardImg = styled.div`
//   width: 272px;
//   height: 218px;
//   float: left;
//   `;

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore,
  category, description, neighborhood, photos, handleClick,
}) => (
  <Card onClick={(e) => { handleClick(e, id); }}>
    <PhotosCarousel photos={photos} />
    <CardText>
      <Name>{name}</Name>
      <Details>
        <span>{category}</span>
        <span> &#8226; </span>
        <span>{neighborhood}</span>
        <span> &#8226; </span>
        <span>{price}</span>
      </Details>
      <div>
        <img src="https://zigat.s3-us-west-1.amazonaws.com/z-favicon.png" alt="logo" />
        <span> </span>
        <RatingLabel>{ratingLabel}</RatingLabel>
        <span> </span>
        <RatingScore>{ratingScore}</RatingScore>
      </div>
      <Description>{description}</Description>
    </CardText>
  </Card>
);

export default CardEntry;
