import styled from 'styled-components';
import Home from './pages/Home';

const MyAPP = styled.div`
  /* background-color: teal; */
`;

function App() {
  return (
    <MyAPP>
      <h1>TheMovieDB home page</h1>
      <Home />
    </MyAPP>
  );
}

export default App;
