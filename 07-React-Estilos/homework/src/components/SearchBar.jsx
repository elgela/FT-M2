// import React from 'react';

import React from "react";

// export default function SearchBar({onSearch}) {
//   // acá va tu código
//   return ( 
//     <div>
//       <input placeHolder='Ciudad...'/>
//       <button onClick={onSearch}>Agregar</button>
//     </div>
//   )
// };

// Echo con Classes
export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <input placeHolder='Ciudad...'/>
        <button onClick={this.props.onSearch}>Agregar</button>
      </div>
    )
  }
}