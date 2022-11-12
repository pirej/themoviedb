import React from 'react';

const Rating = ({ votes }) => {
  const rating = votes * 10;
  return (
    <div>
      <h3>{rating}</h3>
    </div>
  );
};

export default Rating;
