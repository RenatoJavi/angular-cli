//7-Promesas.js
//las funciones resiven parametros

const fs = require('fs');

const nuevaPromesaLectura = new Promise((resolve, reject) => {
    fs.readFile('06-texto.txt', 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                reject(error);
            } else {
                resolve(contenidoArchivo);
            }
        }
    )


});
const nuevaPromesaEscritura = new Promise((resolve, reject) => {
    fs.writeFile('06-texto.txt', 'lo que sea', (error, contenidoArchivo) => {
            if (error) {
                reject(error);
            } else {
                resolve('WEB DESDE MI CASA');
            }
        }
    )

});


nuevaPromesaLectura
    .then((resultadoOK) => {
        console.log('todo bien', resultadoOK);
    }).catch((resultadoERROR) => {
    console.log('todo mal', resultadoERROR);
});

nuevaPromesaEscritura
    .then(() => {

    })
    .catch(() => {
    });