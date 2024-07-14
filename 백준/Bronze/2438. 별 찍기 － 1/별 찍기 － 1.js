const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let star = parseInt(input[0]);
let starCount = ""
for(let i = 0; i<star; i++){
    starCount += "*"
    console.log(starCount)
}
