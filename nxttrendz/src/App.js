import logo from './logo.svg';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound';

function App() {
  return (
   
   <Switch>
    <Route exact path="/login"  component={LoginForm}/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/products" component={Products}/>
    <Route exact path='/cart' component={Cart}/>
    <Route component={NotFound}/>
   </Switch>
  
  );
}

export default App;
