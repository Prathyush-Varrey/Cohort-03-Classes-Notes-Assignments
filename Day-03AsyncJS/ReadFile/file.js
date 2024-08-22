// const { log } = require("console");
const fs = require("fs")


let data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

let data2 = fs.readFileSync("b.txt", "utf-8");
console.log(data2);
