import React, { useEffect, useState } from 'react';
import { useInView } from 'react-cool-inview';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import chevronright from '../images/chevron-right.svg';
import useMovieData from '../state/Store';
import chevrondown from '../images/chevron-down.svg';
import Sidebar from '../components/sidebar/Sidebar';

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
            .filterWrapper {
              box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 5px;
              border-radius: 10px;
              .sideMainItem {
                /* background-color: lightCoral; */
                width: 14.125rem;
                border: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.875rem 1rem;
                margin-top: 0.75rem;
                cursor: pointer;
                p {
                  margin: 0;
                }
              }
              .sideMenuClicked {
                border-bottom: solid 1px #e0e0e0;
              }

              .hiddenGenres {
                visibility: hidden;
                display: none;
              }
              .showGenres {
                visibility: visible;
                display: block;
              }
            }
          }
        }

        .cardssection {
          display: flex;
          .theCards {
            display: flex;
            flex-wrap: wrap;
            /* justify-content: space-around; */
            justify-content: space-between;
            /* gap: 1rem; */
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [data, setData] = useState([]);
  const [clickedToLoad, setClickedToLoad] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  const currentPage = useMovieData(state => state.page);
  const resetPage = useMovieData(state => state.resetPage);
  const loadMoreMovies = useMovieData(state => state.nextPage);
  const discover = useMovieData(state => state.discover);
  const popular = useMovieData(state => state.popular);
  const genres = useMovieData(state => state.genres);

  const firstPage = 1;
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}&language=en-US&page=${firstPage}`;

  const apiUrlNext = `https://api.themoviedb.org/3${discover}/movie${popular}?api_key=${process.env.REACT_APP_THEMOVIEDB_KEY}${genres}&language=en-US&page=${currentPage}`;

  //----------------------------------------------

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(apiUrl);
      const movies = await res.json();
      setData(movies.results);
    };
    getData();
  }, [apiUrl]);
  //----------------------------------------------
  useEffect(() => {
    if (currentPage > firstPage) {
      const getData = async () => {
        const res = await fetch(apiUrlNext);
        const movies = await res.json();
        const newMoviesArr = movies.results;
        setData(data.concat(newMoviesArr));
      };
      getData();
    }
    // eslint-disable-next-line
  }, [currentPage]);

  //----------------------------------------------
  const getMoviesByGenre = () => {
    const getData = async () => {
      const res = await fetch(apiUrlNext);
      const movies = await res.json();
      setData(movies.results);
    };
    getData();
  };

  //----------------------------------------------
  const { observe, unobserve } = useInView({
    rootMargin: '50px 0px',
    onEnter: ({ unobserve }) => {
      unobserve();
      // Load more movies only if you used the load more button first
      clickedToLoad && loadMoreMovies();
      observe();
    },
  });
  //----------------------------------------------

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
                <div className="filterWrapper">
                  <div
                    onClick={() => setFilterClicked(!filterClicked)}
                    className={`${
                      filterClicked
                        ? 'sideMainItem sideMenuClicked'
                        : 'sideMainItem'
                    }`}
                  >
                    <p>Filters</p>
                    <img
                      src={filterClicked ? chevrondown : chevronright}
                      width={16}
                      height={16}
                      alt="arrow icon"
                    />
                  </div>
                  <div
                    className={`${
                      filterClicked ? 'showGenres' : 'hiddenGenres'
                    } `}
                  >
                    <Sidebar />
                  </div>
                </div>
                <div className="btn">
                  <button
                    onClick={() => {
                      resetPage();
                      getMoviesByGenre();
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="cardWrapper">
              <div className="cardssection">
                <div className="theCards">
                  {data?.map((item, idx) => {
                    return <MovieCard item={item} key={idx} />;
                  })}
                </div>
              </div>
              <div ref={observe} className="btnLoad btn">
                <button
                  className={`${clickedToLoad ? 'disabled' : null} `}
                  disabled={clickedToLoad}
                  onClick={() => {
                    loadMoreMovies();
                    setClickedToLoad(true);
                  }}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyHome>
  );
};

export default Home;
