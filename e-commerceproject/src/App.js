import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import UncontrolledExample from "./carousel/Carousele";


import Header from "./Header/Header";

function App() {
  return (
    <div className='App'>
<h1 className='Heading'>Welcome To Our WebSite</h1>
<Header/>
<UncontrolledExample/>
    </div>
  );
}

export default App;
