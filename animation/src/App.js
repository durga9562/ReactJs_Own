import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
<Navbar>

 <NavItem icon="namastey"/>
 <NavItem icon="namastey"/>
 <NavItem icon="namastey"/>
</Navbar>
    </div>
  );
}

function Navbar(props){
  return(
    <nav className='navbar'>
<ul className='navabr-nav'>{props.children}</ul>
    </nav>
  )
}

function NavItem(props){
  return(
    <li className='nav-item'>
<a href="#" className='icon-button'>
  {props.icon}
</a>
    </li>
  )
}

export default App;
