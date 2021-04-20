import { createGlobalStyle } from 'styled-components';
import LayoutInfo from './Layout/LayoutInfo';
import LayoutSelect from './Layout/LayoutSelect';

const GlobalStyle = createGlobalStyle`
  html, body{
    background-color: #5A5A5A;
    margin: 0;
    color: white;
    font-size: 0.9rem;
    font-family: Roboto,'Noto Sans KR',sans-serif;
    font-weight: 400;
    line-height: 1.43;
  };

  select{
    border-radius: 0.5em;
  };
`
function App() {
  return (
    <>
      <GlobalStyle />
      <LayoutInfo />
      <LayoutSelect />
    </>
  );
}

export default App;
