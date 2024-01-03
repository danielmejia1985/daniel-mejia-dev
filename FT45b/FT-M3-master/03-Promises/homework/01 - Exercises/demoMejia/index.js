const fs = require("fs")

let readFileSync = fs.readFileSync("./folder-file-test/file-test-prueba.txt");
// console.log(readFileSync === true);
// console.log(readFileSync);
// console.log(typeof readFileSync);
// console.log(typeof readFileSync.toString());
console.log(true === true);
let lleno = "hola";
console.log(lleno === true);
let vacio = "";
if (!lleno) {
    console.log("String lleno");
}else{
    console.log("String vacio");
}

// const promesaTestDemo = (resolve, reject) => {
  
// }
