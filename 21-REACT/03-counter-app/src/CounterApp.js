
import {useState} from 'react';
import React from 'react'
import PropTypes from 'prop-types'

 export const CounterApp = ({value}) => {

const [couter,setCounter]=useState(0); //hOOK

//const[lessCounter,setLessCounter];

//HOOK ES UNA FUNCION

    //handleAdd 
    const handleAdd=(e)=>{
    setCounter(couter+1); //opc 1 
   // setCounter(c=>c+1) //opc 2  puede recive el valor anterior de couter

    
    }

    const reset=()=>{
       setCounter (value);
    }

    const handleSubtract=()=>{
            setCounter(couter-1)
    }
    return (
        <div>
            <h1>CounterApp</h1>
            <h2>{couter}</h2>
            <button  onClick={handleAdd} >+1</button>
            <button  onClick={reset}> Reset</button>
            <button onClick={handleSubtract}>-1</button>
        </div>
    )
}

CounterApp.propTypes = {
    value:PropTypes.number
}

export default CounterApp



