import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  .numbers {
    display: flex;
    align-items: center;
    h3 {
      color: green;
      margin: 0;
    }
    p {
      color: green;
      margin: 0 0 0.4rem 0;
      font-size: 0.4rem;
    }
  }
`;

const Rating = ({ votes }) => {
  const rating = votes * 10;
  return (
    <ProgressBar>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="numbers">
          <h3>{rating}</h3>
          <p>%</p>
        </div>
      </div>
    </ProgressBar>
  );
};

export default Rating;
