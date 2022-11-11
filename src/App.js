import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

const MyAPP = styled.div`
  /* background-color: teal; */
`;

function App() {
  return (
    <MyAPP>
      <Navbar />
      <Home />
    </MyAPP>
  );
}

export default App;
