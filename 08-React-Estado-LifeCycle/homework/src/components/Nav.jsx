import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <img src={Logo} alt='Logo Henry'/>
      <h5>Henry - Weather App</h5>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
