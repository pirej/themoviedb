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
  .wasClicked {
    background-color: #01b4e4;
    color: white;
    border: solid 1px #01b4e4;
  }
`;

const Sidebar = () => {
  const newDiscover = useMovieData(state => state.newDiscover);
  const newPopular = useMovieData(state => state.newPopular);
  //-----------------
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
        <button
          onClick={e => {
            genAction();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Action
        </button>
        <button
          onClick={e => {
            genAdventure();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Adventure
        </button>
        <button
          onClick={e => {
            genAnimation();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Animation
        </button>
        <button
          onClick={e => {
            genComedy();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Comedy
        </button>
        <button
          onClick={e => {
            genCrime();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Crime
        </button>
        <button
          onClick={e => {
            genDocumentary();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Documentary
        </button>
        <button
          onClick={e => {
            genDrama();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Drama
        </button>
        <button
          onClick={e => {
            genFamily();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Family
        </button>
        <button
          onClick={e => {
            genFantasy();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Fantasy
        </button>
        <button
          onClick={e => {
            genHistory();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          History
        </button>
        <button
          onClick={e => {
            genHorror();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Horror
        </button>
        <button
          onClick={e => {
            genMusic();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Music
        </button>
        <button
          onClick={e => {
            genMistery();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Mistery
        </button>
        <button
          onClick={e => {
            genRomance();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Romance
        </button>
        <button
          onClick={e => {
            genSciFi();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Science Fiction
        </button>
        <button
          onClick={e => {
            genTvMovie();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          TV Movie
        </button>
        <button
          onClick={e => {
            genThriller();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Thriller
        </button>
        <button
          onClick={e => {
            genWar();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          War
        </button>
        <button
          onClick={e => {
            genWestern();
            newDiscover();
            newPopular();
            e.currentTarget.classList.toggle('wasClicked');
          }}
        >
          Western
        </button>
      </div>
    </TheSidebar>
  );
};

export default Sidebar;
