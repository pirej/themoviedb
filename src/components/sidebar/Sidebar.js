import React from 'react';
import styled from 'styled-components';
import useMovieData from '../../state/Store';

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
  const genAction = useMovieData(state => state.genAction);
  const genAdventure = useMovieData(state => state.genAdventure);
  const genAnimation = useMovieData(state => state.genAnimation);
  const genComedy = useMovieData(state => state.genComedy);
  const genCrime = useMovieData(state => state.genCrime);
  const genDocumentary = useMovieData(state => state.genDocumentary);
  const genDrama = useMovieData(state => state.genDrama);
  const genFamily = useMovieData(state => state.genFamily);
  const genFantasy = useMovieData(state => state.genFantasy);
  const genHistory = useMovieData(state => state.genHistory);
  const genHorror = useMovieData(state => state.genHorror);
  const genMusic = useMovieData(state => state.genMusic);
  const genMistery = useMovieData(state => state.genMistery);
  const genRomance = useMovieData(state => state.genRomance);
  const genSciFi = useMovieData(state => state.genSciFi);
  const genTvMovie = useMovieData(state => state.genTvMovie);
  const genThriller = useMovieData(state => state.genThriller);
  const genWar = useMovieData(state => state.genWar);
  const genWestern = useMovieData(state => state.genWestern);

  return (
    <TheSidebar>
      <p>Genres</p>
      <div className="genresWrapper">
        <button onClick={() => genAction()}>Action</button>
        <button onClick={() => genAdventure()}>Adventure</button>
        <button onClick={() => genAnimation()}>Animation</button>
        <button onClick={() => genComedy()}>Comedy</button>
        <button onClick={() => genCrime()}>Crime</button>
        <button onClick={() => genDocumentary()}>Documentary</button>
        <button onClick={() => genDrama()}>Drama</button>
        <button onClick={() => genFamily()}>Family</button>
        <button onClick={() => genFantasy()}>Fantasy</button>
        <button onClick={() => genHistory()}>History</button>
        <button onClick={() => genHorror()}>Horror</button>
        <button onClick={() => genMusic()}>Music</button>
        <button onClick={() => genMistery()}>Mistery</button>
        <button onClick={() => genRomance()}>Romance</button>
        <button onClick={() => genSciFi()}>Science Fiction</button>
        <button onClick={() => genTvMovie()}>TV Movie</button>
        <button onClick={() => genThriller()}>Thriller</button>
        <button onClick={() => genWar()}>War</button>
        <button onClick={() => genWestern()}>Western</button>
      </div>
    </TheSidebar>
  );
};

export default Sidebar;
