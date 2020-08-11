import React from 'react';
import styled from 'styled-components';

const Carousel = styled.div`
  background-image: url('${(photos) => photos.url}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  cursor: pointer;
  width: 272px;
  height: 218px;
  `;

const PhotosCarousel = ({ photos }) => (
  <Carousel url={photos[0].url} />
);

export default PhotosCarousel;
