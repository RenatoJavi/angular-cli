import  { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFechGifs = (category) => {
   
    const [state, setstate] = useState({
            data:[],
            loading:true,
    });

   useEffect(()=>{//cuerpo de mi peticion http//aquinecesito mis imagenes

        getGifs(category)
            .then(img=>{


                setstate({

                    data:img,
                    loading:false,
         } );
                })
        
   },[category]);



    return state;
}

// es la {data:[],loading:true };