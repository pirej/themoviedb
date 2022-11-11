import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: teal;
  width: 11.53rem;
  height: 25.48rem;
  /* margin-top: 1.875rem; */
  margin-top: 0.75rem;
  border: solid 1px grey;
  border-radius: 10px;
  h3 {
    text-align: center;
    color: white;
  }
`;

const MovieCard = () => {
  return (
    <Card>
      <h3>Movie demo</h3>
    </Card>
  );
};

export default MovieCard;
