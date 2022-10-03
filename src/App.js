import './App.css';
import Wrapper from './components/UI/Wrapper';
import VerticalMenu from './components/VerticalMenu/VerticalMenu';
import VerticalMenu2 from './components/VerticalMenu2/VerticalMenu2';
import VerticalMenu3 from './components/VerticalMenu3/VerticalMenu3';

function App() {
  return (
    <div ClassName='App'>
      <Wrapper>
        <VerticalMenu />
        <VerticalMenu2 />
        <VerticalMenu3 />
      </Wrapper>
    </div>
  );
}
export default App;
