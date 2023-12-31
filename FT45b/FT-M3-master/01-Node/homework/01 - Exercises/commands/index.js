const fs = require("fs");
const utils = require("../utils/request");
// const colors = require("colors");
// utils -> {request : fn(url, cb)}
const process = require("process");
// const { error } = require("console");

const pwd = print => print(process.cwd());

const date = print => print(Date());

const echo = (print, args) => print(args);

const ls = print => {
  fs.readdir(".", (error, files) => {
    if (error) throw new Error(err);

    const arrAllFiles = files.map(file => (file.includes(".")) ? file : file);

    print(arrAllFiles.join(" "));
  });
};

const cat = (print, args) => {
    fs.readFile(args, "utf-8", (error, data) => {
      if (error) throw new Error(err);
      print(data)
    })
  }
  
  // Xavier 
const head = (print, args) => {
  fs.readFile(args, "utf-8", (error, data) => {
    if (error) throw new Error(err);
    const firstLine = data.split("\n")[0];
    print(firstLine);
    
  })
}

const tail = (print, args) => {
  fs.readFile(args, 'utf-8', (error, data) => {
    if(error) throw new Error(err);

    const lineas = data.split('\n');
    const ultimaLinea = lineas[lineas.length - 1];
    print(ultimaLinea.trim())
    
  });
}

const curl= (print, args) => {
  utils.request(args, (error, response) => {
    if(error) throw new Error(err);
    print(response)
  })
}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl };