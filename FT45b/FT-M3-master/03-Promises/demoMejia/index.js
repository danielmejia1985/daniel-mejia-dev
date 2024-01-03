//? TIPOS DE PROMESAS






// (error) => {console.log("error salio malll");}
// https://rickandmortyapi.com/apii/characterr/11

// const getCharacters = () => {
//     fetch(`https://jsonplaceholder.typicode.comm/users`).then((response) => { console.log(response.json());}, ).then((data) => {
         
//         console.log(typeof data);
//     }).catch((err) => {
//         console.log("error desde catch");
//         console.log(err);
//     })
// };
// getCharacters();

// const fs = require("fs")

const promesa = new Promise((resolve, reject) => {
  
    if (true) {
        resolve("Correcta..");
    }else{
        reject("Rechazada");
    }
});
// console.log(promesa);

promesa.then(
    (resolve) => {console.log(resolve);},
    (reject) => {console.log(reject);}
).catch((reject) => {console.log(reject);})

