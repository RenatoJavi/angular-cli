//8 promesas
const fs = require('fs');
const nuevaPromesa = new Promise(

    (resolve, reject) => {
        fs.readFile('06-texto.txt', 'utf-8',
            (err, contenidoArchivo) => {
                if (err) {
                    reject(err);


                } else {

                    resolve(contenidoArchivo);
                }

            });

    }

);


console.log(nuevaPromesa);
nuevaPromesa
    .then(
        (resultadoOk) => {
            console.log('todo bien con la Promesa ', resultadoOk);
        }
    )

.catch(
    (resultadoError) => {

        console.log("mal", resultadoError);
    });

const nuevaPromesaEscritura = new Promise(

    (resolve, reject) => {
        fs.writeFile('06-texto.txt', 'web latno',
            (err, contenidoArchivo) => {
                if (err) {
                    reject(err);


                } else {

                    resolve("web");
                }

            });

    }

);