// import React from 'react';

import React from "react";

// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   return ( 
//     <div>
//       <input placeHolder='Ciudad...'/>
//       <button onClick={() => onSearch('Agregando ciudad...')}>Agregar</button>
//     </div>
//   )
// };

// Echo con Classes
export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input className='input' placeHolder='Ciudad...'/>
        <button className='search' onClick={this.props.onSearch}>Agregar</button>
      </div>
    )
  }
}