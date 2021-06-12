import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { async } from 'rxjs';
//import { getOwner } from './bases/08-impo-export';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
/////////////////////////////////
const activo=true;
// let mensaje ="";
// if (activo) {
//   mensaje='activo';
  
// } else {
//   mensaje="Inactivo";  
// }


//const mensaje=(activo)? 'activo':"inactivo";

const mensaje=activo && 'Activo ok';
console.log(mensaje);