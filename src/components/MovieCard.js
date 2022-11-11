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

const MovieCard = ({ item }) => {
  console.log('item data is ', item);
  const { original_title, release_date, vote_average } = item;
  return (
    <Card>
      <h3>Procent => {vote_average}</h3>
      <h3>{original_title}</h3>
      <h3>{release_date}</h3>
    </Card>
  );
};

export default MovieCard;
