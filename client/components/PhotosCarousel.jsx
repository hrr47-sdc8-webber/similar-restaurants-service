import React, { useState } from 'react';
import styled from 'styled-components';

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

const ButtonLeft = styled.button`
  position: absolute;
  top: 32%;
  left: 0%;
  background-color: transparent;
  color: white;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  text-align: center;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &:hover {
    background-color: #101820;
  }
`;

const ButtonRight = styled.button`
  position: absolute;
  top: 32%;
  right: 0%;
  background-color: transparent;
  color: white;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  text-align: center;
  height: 40px;
  width: 40px;
  cursor: pointer;

  &:hover {
    background-color: #101820;
  }
`;

const PhotosCarousel = ({ photos }) => {
  const [index, setIndex] = useState(0);

  return (
    <Carousel>
      <Slide src={photos[index].url} alt="" />
      <ButtonLeft onClick={() => setIndex(index - 1)}>
        {'<'}
      </ButtonLeft>
      <ButtonRight onClick={() => setIndex(index + 1)}>
        {'>'}
      </ButtonRight>
    </Carousel>
  );
};

export default PhotosCarousel;
