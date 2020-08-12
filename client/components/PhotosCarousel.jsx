import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Carousel = styled.div`
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: 272px;
`;

const Slide = styled.img`
  width: 100%;
  height: auto;
`;

const Button = styled.button`
  position: absolute;
  top: 32%;
  background-color: transparent;
  color: white;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  text-align: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #101820;
  }

  &.btn-left {
    left: 0%;
  }

  &.btn-right {
    right: 0%;
  }
`;

const PhotosCarousel = ({ photos }) => {
  let [index, setIndex] = useState(0);
  let currentPhoto = photos[index];

  const arrowRightClick = () => {
    if (index !== photos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(index = 0);
    }
    currentPhoto = photos[index];
  };

  const arrowLeftClick = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(index = photos.length - 1);
    }

    currentPhoto = photos[index];
  };

  if (!currentPhoto) {
    return (
      <Carousel>
        <Slide src='https://zigat.s3-us-west-1.amazonaws.com/no-dish.png' alt="no dish photo" />
      </Carousel>
    );
  }

  return (
    <Carousel>
      <Slide src={currentPhoto.url} alt="restaurant photo" />
      <Button className="btn-left" onClick={arrowLeftClick}>
        &lt;
      </Button>
      <Button className="btn-right" onClick={arrowRightClick}>
        &gt;
      </Button>
    </Carousel>
  );
};

PhotosCarousel.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PhotosCarousel;
