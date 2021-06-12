
import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {
  const {data:images,loading}=  useFechGifs(category);

 
//const [contador, setcontador] = useState(0);
// useEffect(()=>{
//     getGifs(category)
//     .then(imgs=>{setImages(imgs)});
// },[category]);

    // const getGifs=async()=>{

    //  const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=k3yngY6Tvh8ivUgBnE8H4cPWpsn6xLV7`;
    //  const resp=await  fetch(url);
    //  const {data}=await resp.json();

    //  const gifs=data.map(img=>{
    //     return{
    //         id:img.id,
    //         title:img.title,
    //         url:img.images?.downsized_medium.url          
    //     }
    //  });
    //  console.log(gifs);
    //  setImages(gifs);

    //  //setImagenes
    // };
    //getGifs();
    return (//aqui estoy regresando 2 objetos. por eso uso el fracment
       <>
        <h3>{category}</h3>
        {loading && <p>Loading ...</p>}
             <div className="card-grid" >
                        
               {
                images.map(img=>(
                    
                    <GifGridItem 
                        key={img.id}
                    { ...img}/>
                ))
               }
                     
        </div>
         {/*<h3>{contador}</h3>
             <button onClick={()=>{setcontador(contador+1)}}>Add</button> */}
        </>
    )
}
