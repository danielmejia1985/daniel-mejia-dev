"use strict";

const utils = require("./utils");
let exerciseUtils = require("./utils");

let args = process.argv.slice(2).map(function (st) {
  return st.toUpperCase();
});

module.exports = {
  problemAx: problemA,
  problemBx: problemB
};

// corre cada problema dado como un argumento del command-line para procesar
args.forEach(function (arg) {
  let problem = module.exports["problem" + arg];
  if (problem) problem();
});




function problemA() {
  //? callback version
  // exerciseUtils.readFile("poem-two/stanza-01.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });
  // exerciseUtils.readFile("poem-two/stanza-02.txt", function (err, stanza) {
  //   exerciseUtils.blue(stanza);
  // });

  //? promise version
  // Tu código acá:

  const p1 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-01.txt")
  .then((data) => exerciseUtils.blue(data))

  const p2 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-02.txt")
  .then((data) => exerciseUtils.blue(data))

  Promise.all([p1,p2])
  .then(() => utils.blue("done"))
  
}problemA()



function problemB() {
  let filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
    return "poem-two/" + "stanza-0" + n + ".txt";
  });
  let randIdx = Math.floor(Math.random() * filenames.length);
  filenames[randIdx] = "wrong-file-name-" + (randIdx + 1) + ".txt";

  //? callback version
  filenames.forEach((filename) => {
    exerciseUtils.readFile(filename, function (err, stanza) {
      exerciseUtils.blue(stanza);
      if (err) exerciseUtils.magenta(new Error(err));
    });
  });

  //? promise version
  // Tu código acá:
  const p1 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-01.txt")
  .then((data) => exerciseUtils.blue(data))
  const p2 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-02.txt")
  .then((data) => exerciseUtils.blue(data))
  const p3 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-03.txt")
  .then((data) => exerciseUtils.blue(data))
  const p4 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-04.txt")
  .then((data) => exerciseUtils.blue(data))
  const p5 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-05.txt")
  .then((data) => exerciseUtils.blue(data))
  const p6 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-06.txt")
  .then((data) => exerciseUtils.blue(data))
  const p7 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-07.txt")
  .then((data) => exerciseUtils.blue(data))
  const p8 = exerciseUtils.promisifiedReadFile("./poem-two/stanza-08.txt")
  .then((data) => exerciseUtils.blue(data))

  Promise.all([p1,p2,p3,p4,p5,p6,p7,p8])
  .then(() => utils.blue("done"))
  .catch((error) => console.log(error))

}

// EJERCICIO EXTRA
function problemC() {
  let fs = require("fs");
  function promisifiedWriteFile(filename, str) {
    // tu código acá:
  }
}
