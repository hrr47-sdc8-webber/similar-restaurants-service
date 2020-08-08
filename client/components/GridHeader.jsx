import React from 'react';

const GridHeader = ({ currentCategory, currentName }) => (
  <div>
    <h3>
      {'More '}
      {currentCategory}
      {' Near '}
      {currentName}
    </h3>
  </div>
);

export default GridHeader;
