import React from 'react';
import styled from 'styled-components';

const TheSidebar = styled.div`
  height: auto;
  padding: 0.5rem 1rem;
  p {
    color: black;
    margin-top: 0.2rem;
  }
  button {
    background-color: white;
    border-radius: 50px;
    border: solid 1px #808080;
    padding: 0.35rem 0.75rem;
    color: #545454;
    margin: 0 0.5rem 0.5rem 0;
    :hover {
      background-color: #01b4e4;
      color: white;
      border: solid 1px #01b4e4;
    }
  }
`;

const Sidebar = () => {
  return (
    <TheSidebar>
      <p>Genres</p>
      <div className="genresWrapper">
        <button>Action</button>
        <button>Adventure</button>
        <button>Animation</button>
        <button>Comedy</button>
        <button>Crime</button>
        <button>Documentary</button>
        <button>Drama</button>
        <button>Family</button>
        <button>Fantasy</button>
        <button>History</button>
        <button>Horror</button>
        <button>Music</button>
        <button>Mistery</button>
        <button>Romance</button>
        <button>Science Fiction</button>
        <button>TV Movie</button>
        <button>Thriller</button>
        <button>War</button>
        <button>Western</button>
      </div>
    </TheSidebar>
  );
};

export default Sidebar;
