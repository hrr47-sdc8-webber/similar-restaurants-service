import React from 'react';
import styled from 'styled-components';

const Title = styled.span`
  width: 1408px;
  height: 32px;
  margin-bottom: 25px;
  margin-right: 32px;
  display: block;
  padding-top: 6px;
  border-top: 1px solid black;
  font-size: 22px;
  letter-spacing: .004em;
  line-height: 32px;
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
