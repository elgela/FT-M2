import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
// import Cards from './components/Cards.jsx';


export default function App() {
  
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  }
  
  return (
    <div className="App">
      <Nav onSearch={onSearch}/>
      <h1>Título</h1>
    </div>
  );
}
