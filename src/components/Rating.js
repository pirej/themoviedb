import React from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div`
  .numbers {
    display: flex;
    align-items: center;
    z-index: 3000;
    margin-left: 0.1rem;
    h3 {
      color: white;
      margin: 0;
      font-size: 0.9rem;
      font-weight: 500;
    }
    p {
      color: white;
      margin: 0 0 0.4rem 0;
      font-size: 0.3rem;
    }
  }

  .svgWrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .svgFront {
      position: absolute;
      bottom: -15px;
      z-index: 1000;

      circle {
        fill: none;
        /* stroke: url(#GradientColor); */
        /* stroke: red; */
        stroke-width: 4px;
        /* stroke-dasharray: 434; /* full circle */
        stroke-dasharray: 80;
        stroke-offset: 200;
      }
    }
    .svgBack {
      position: absolute;
      bottom: -15px;
      z-index: 990;
      circle {
        fill: none;
        stroke: #33322d;
        stroke-width: 5px;
        stroke-dasharray: 440;
      }
    }
    .svgBase {
      position: absolute;
      bottom: -15px;
      z-index: 890;
      circle {
        fill: #1a1a1a;
        stroke: #1a1a1a;
        stroke-width: 8px;
        stroke-dasharray: 440;
      }
    }
  }
`;

const Rating = ({ votes }) => {
  const rating = votes * 10;

  return (
    <ProgressBar>
      <div className="wrapper">
        <div className="svgWrapper">
          <div className="numbers">
            <h3>{rating}</h3>
            <p>%</p>
          </div>
          <div className="svgFront">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="40px"
              height="40px"
              transform="rotate(-85)"
            >
              <circle
                stroke={
                  votes >= 7
                    ? '#00C392'
                    : votes >= 6
                    ? '#ACAF1A'
                    : votes >= 5
                    ? '#CA851E'
                    : '#CE3939'
                }
                cx="20"
                cy="20"
                r="16"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="svgBack">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="40px"
              height="40px"
              transform="rotate(-85)"
            >
              <circle cx="20" cy="20" r="16" strokeLinecap="round" />
            </svg>
          </div>
          <div className="svgBase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="40px"
              height="40px"
              transform="rotate(-85)"
            >
              <circle cx="20" cy="20" r="16" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </ProgressBar>
  );
};

export default Rating;
