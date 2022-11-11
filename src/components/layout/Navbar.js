import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
import plus from '../../images/plus.svg';

const MyNav = styled.header`
  background-color: #0d253f;
  .wrapper {
    max-width: 87.5rem;
    margin: auto;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
      padding: 0 2.5rem;

      .leftside {
        display: flex;
        a {
          display: flex;
          align-self: center;
        }
        img {
          margin-right: 0.8rem;
        }
        p {
          color: white;
          font-weight: 500;
          margin: 0 0.8rem;
          /* letter-spacing: 0.04rem; */
        }
        a {
          text-decoration: none;
        }
      }
      .rightside {
        display: flex;
        a {
          display: flex;
          align-self: center;
        }

        button {
          background: none;
          color: white;
          border: solid 1px white;
          border-radius: 4px;
          font-size: 0.75rem;
          padding: 0.3rem;
          margin: 0.1rem 0.8rem 0 0.8rem;
          :hover {
            background-color: white;
            color: #0d253f;
          }
        }
        p {
          color: white;
          font-weight: 500;
          /* letter-spacing: 0.04rem; */
          margin: 0 0.8rem;
        }
        a p {
          text-decoration: none;
        }
        a > img {
          margin: 0 0.8rem;
        }
        a > img.rightimg {
          margin: 0 0 0 0.8rem;
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <MyNav>
      <Router>
        <div className="wrapper">
          <div className="container">
            <div className="leftside">
              <Link to="/">
                <img src={logo} alt="logo" height={20} width={154} />
              </Link>
              <Link to="#">
                <p>Movies</p>
              </Link>
              <Link to="#">
                <p>TV Shows</p>
              </Link>
              <Link to="#">
                <p>People</p>
              </Link>
              <Link to="#">
                <p>More</p>
              </Link>
            </div>
            <div className="rightside">
              <Link to="#">
                <img src={plus} alt="plus icon" height={15} width={15} />
              </Link>
              <Link to="#">
                <button>EN</button>
              </Link>
              <Link to="#">
                <p>Login</p>
              </Link>
              <Link to="#">
                <p>Join TMDB</p>
              </Link>
              <Link to="#">
                <img
                  className="rightimg"
                  src={search}
                  alt="search icon"
                  height={22}
                  width={22}
                />
              </Link>
            </div>
          </div>
        </div>
      </Router>
    </MyNav>
  );
};

export default Navbar;
