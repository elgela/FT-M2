const { INCREMENTO, DECREMENTO, IMPAR, ASINCRONO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

          // con switch

function contador(state = initialState, action) {
  switch(action.type){
    case INCREMENTO:
      return {
        ...state,
        contador: state.contador + 1
      }
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1
      }
      default:
        return state;

    case IMPAR:
      if(state.contador % 2 !== 0) {
        return {
          ...state,
          contador: state.contador + 2
        }
      }
      else {
        return {
          ...state,
          contador: state.contador + 1
        }
      }

    case ASINCRONO:
      return {
        ...state,
        contador: state.contador + 1
      }
  }
          // con if()
          
  // function contador(state = initialState, action) {
  //   if(action.type === INCREMENTO) {
  //     return {
  //       contador: state.contador + 1
  //     }
  //   } else if(action.type === DECREMENTO) {
  //     return {
  //       contador: state.contador - 1
  //     }
  //   } 
  //     return state;
  // }

}

module.exports = contador;