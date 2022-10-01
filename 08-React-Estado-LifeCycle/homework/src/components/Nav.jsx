import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <img src={Logo} alt='Logo Henry'/>
      Henry - Weather App
      <SearchBar/>
    </nav>
  );
};

export default Nav;
