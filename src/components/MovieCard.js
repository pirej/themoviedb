import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  width: 11.53rem;
  height: 22.8rem;
  /* margin-top: 1.875rem; */
  margin-top: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 8px;
  border-radius: 10px;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .imgSection {
      position: relative;
      a > img {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }
      .ratingSection {
        position: absolute;
        bottom: -5px;
        left: 10px;
        h3 {
          color: green;
          margin: 0;
        }
      }
    }

    .titleSection {
      padding-left: 1rem;
      a {
        text-decoration: none;
        color: #000;
        font-weight: 700;
      }
      p {
        color: #00000099;
        margin-top: 0rem;
        margin-bottom: 0.6rem;
        font-size: 0.9rem;
      }
    }
  }
`;

const MovieCard = ({ item }) => {
  const { original_title, release_date, vote_average, poster_path } = item;

  const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  const backdropUrl = baseUrl + poster_path;

  // format date same as the reference site
  const tempdate = new Date(release_date);
  const shortenDate = tempdate.toString().substring(4, 15);
  const formatedDate =
    shortenDate.substring(0, 6) + shortenDate.slice(6).replace(' ', ', ');

  return (
    <Card>
      <div className="wrapper">
        <Router>
          <div className="imgSection">
            <Link to="#">
              <img src={backdropUrl} alt="movie backdrop" />
            </Link>
            <div className="ratingSection">
              <h3>Rating {vote_average}</h3>
            </div>
          </div>
        </Router>
        <div className="titleSection">
          <Router>
            <Link to="#" className="title">
              {original_title}
            </Link>
          </Router>
          <p>{formatedDate}</p>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
