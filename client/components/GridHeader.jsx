import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.div`
  width: 100%;
  max-height: 32px;
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
  <Title>
    {'More '}
    {currentCategory}
    {' Near '}
    {currentName}
  </Title>
);

GridHeader.propTypes = {
  currentCategory: PropTypes.string.isRequired,
  currentName: PropTypes.string.isRequired,
};

export default GridHeader;
