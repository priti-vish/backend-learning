import fs from "fs/promises"
 
let a = await fs.writeFile("test.txt","This is a testing file")

let b= await fs.readFile("test.txt")

console.log(b.toString())