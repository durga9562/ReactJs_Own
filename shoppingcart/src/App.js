
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from "./component/data";

function App() {
const {prodcuts} = data;

  return (
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main prodcuts={prodcuts}></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
