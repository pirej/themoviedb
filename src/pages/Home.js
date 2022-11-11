import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import chevronright from '../images/chevron-right.svg';
// import chevrondown from '../images/chevron-down.svg';

const MyHome = styled.div`
  display: flex;
  justify-content: center;
  .maincontent {
    max-width: 82.5rem;
    padding: 1.875rem 2.5rem;
    .mainWrapper {
      .title {
        margin-bottom: 1rem;
        h2 {
          font-size: 1.6rem;
          font-weight: 500;
          margin: 0;
        }
      }

      .mainsection {
        display: flex;
        gap: 2rem;
        .sidebarWrapper {
          .allSidebarItems {
            max-width: 16.125rem;
            width: 16.125rem;
            .sideMainItem {
              width: 14.125rem;
              border: solid 1px lightgrey;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0.875rem 1rem;
              margin-top: 0.75rem;
              p {
                margin: 0;
              }
            }
            .btn {
              button {
                background-color: #01b4e4;
                cursor: pointer;
                font-size: 1.2rem;
                font-weight: 500;
                color: white;
                width: 100%;
                height: 2.75rem;
                border: none;
                margin-top: 1rem;
                border-radius: 20px;
              }
            }
          }
        }

        .cardssection {
          display: flex;
          .theCards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            /* gap: 1rem; */
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(apiUrl);
      const movies = await res.json();
      setData(movies);
    };
    getData();
    setLoading(false);
  }, [apiUrl]);

  // data && console.log('data is ', data.results);

  return (
    <MyHome>
      <div className="maincontent">
        <div className="mainWrapper">
          <div className="title">
            <h2>Popular Movies</h2>
          </div>
          <div className="mainsection">
            <div className="sidebarWrapper">
              <div className="allSidebarItems">
                <div className="sideMainItem">
                  <p>Filters</p>
                  <img
                    src={chevronright}
                    width={16}
                    height={16}
                    alt="arrow icon"
                  />
                </div>
                <div className="btn">
                  <button>Search</button>
                </div>
              </div>
            </div>
            <div className="cardssection">
              <div className="theCards">
                {data
                  ? data.results.map((item, idx) => {
                      return <MovieCard item={item} key={idx} />;
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyHome>
  );
};

export default Home;
