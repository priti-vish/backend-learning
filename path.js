import path from "path"

let myPath="C:\\Users\\UNI5\\Desktop\\folder\\Sample Portfolio\\test.txt"
console.log(myPath)
console.log(`Extname func: ${path.extname(myPath)}`)
console.log(`Directory func: ${path.dirname(myPath)}`)
console.log(`Filename func: ${path.basename(myPath)}`)
console.log(`Directory func: ${path.join("C:/","\\programs.txt")}`)