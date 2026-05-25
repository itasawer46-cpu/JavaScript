import fs from "fs/promises";
let a = await fs.readFile("husnain.txt")
let b = fs.writeFile("joker.txt","\n\n\n\nAre you Joker")
console.log(a.toString())