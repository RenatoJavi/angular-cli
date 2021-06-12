import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { getOwner } from './bases/08-impo-export';




ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
/////////////////////////////////

const apikey='k3yngY6Tvh8ivUgBnE8H4cPWpsn6xLV7';

const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
peticion
.then(resp=>resp.json())
.then(({data})=>{
  console.log(data.images.original.url);
  const {url}=data.images.original;
  console.log(url);
const img=document.createElement('img');
img.src=url;

document.body.append(img);

})
.catch(console.warn);