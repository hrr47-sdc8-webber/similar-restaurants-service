import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  background-color: green;
  width: 1408px;
  height: 32px;
  margin-bottom: 25px;
  padding-top: 6px;
  border-top: 2px solid black;
  `;

const GridHeader = ({ currentCategory, currentName }) => (
  <div>
    <Title>
      {'More '}
      {currentCategory}
      {' Near '}
      {currentName}
    </Title>
  </div>
);

export default GridHeader;
