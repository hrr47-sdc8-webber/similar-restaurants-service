import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import PhotosCarousel from './PhotosCarousel.jsx';

const Card = styled.div`
  width: 50%;
  min-width: 420px;
  max-width: 897px;
  max-height: 258px;
  margin-bottom: 40px;
  display: flex;
  cursor: pointer;
`;

const CardText = styled.div`
  background-color: white;
  width: 50%;
  max-height: 178px;
  padding: 20px 24px;
  float: right;
  color: #101820;
`;

const Name = styled.div`
  letter-spacing: .086em;
  text-transform: uppercase;
  font-weight: 500;

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

const Logo = styled.img`
  bottom: 1px;
  height: 20px;
  padding-right: 4px;
  position: relative;
  vertical-align: middle;
  width: 20px;
`;

const RatingLabel = styled.span`
  letter-spacing: .061em;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
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

const CardEntry = ({
  id, name, price, ratingLabel, ratingScore,
  category, description, neighborhood, photos, handleClick,
}) => (
  <Card>
    <PhotosCarousel photos={photos} />
    <CardText className="textLink" onClick={(e) => { handleClick(e, id); }}>
      <Name>{name}</Name>
      <Details>
        {category}
        <span> &#8226; </span>
        {neighborhood}
        <span> &#8226; </span>
        {price}
      </Details>
      <div>
        <Logo src="https://zagat.com/assets/img/z-logo-icon-red.svg" alt="logo" />
        <span> </span>
        <RatingLabel>{ratingLabel}</RatingLabel>
        <span> </span>
        <RatingScore>{ratingScore}</RatingScore>
      </div>
      <Description>{description}</Description>
    </CardText>
  </Card>
);

CardEntry.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  ratingLabel: PropTypes.string.isRequired,
  ratingScore: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export {
  CardEntry,
  CardText,
};
