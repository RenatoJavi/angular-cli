export const getGifs=async(category)=>{//la amndamos como argumento

    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=k3yngY6Tvh8ivUgBnE8H4cPWpsn6xLV7`;
    const resp=await  fetch(url);
    const {data}=await resp.json();

    const gifs=data.map(img=>{
       return{
           id:img.id,
           title:img.title,
           url:img.images?.downsized_medium.url
         
       }
    });
    //console.log(gifs);
return gifs;
    //setImagenes

    
   };