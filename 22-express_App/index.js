const express=require('express');
const app=new express();
const port=3000;


let itemUser=express.Router();
let useRuta=express.Router();

app.use('/item',itemUser);
app.use('/ruta',useRuta);
app.use(express.static('./public/images/favicon.ico'))

function myLoggger(req,res,next){

    req.timeReceived=Date();
    next();
};
app.use(myLoggger);

    app.get('/', (req, res)=> {
        res.send('Hello World! ' +req.timeReceived+ " con exito")
    });
    app.post('/',(req,res)=>{
        res.send('got a post peticion');

    });
    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
      });
app.get('/servidor',(rep,res)=>{

res.send('Mensaje del servidor');

});






app.listen(port,()=>{console.log(`ok ${port}`);});
//https://www.youtube.com/watch?v=x0uP3fTHMrw 
//como crear un servidor htpps con node.js y express
