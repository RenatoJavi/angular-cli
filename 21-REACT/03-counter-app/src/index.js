import React from 'react';
import ReactDOM from  'react-dom' ;
//import PrimeraApp from './PrimeraApp';
import './index.css';
import { CounterApp } from './CounterApp';




const divRoot=document.querySelector('#root');


//ReactDOM.render(<PrimeraApp value ={12,3,4}/>,divRoot);
ReactDOM.render(<CounterApp value={100}/>,divRoot);
