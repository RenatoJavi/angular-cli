//import { Fragment as div } from "react";
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp=({saludo,subtitulo})=>{

 
return  (
    <>
            {/* <pre>{JSON.stringify(saludo,null,3)}</pre> */}
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
    </>            
     );
            

}

PrimeraApp.propTypes={
    saludo:PropTypes.string.isRequired  //.isrequired
}
PrimeraApp.defaultProps={
    subtitulo:'Soy un subtitulo'
}
export default PrimeraApp;