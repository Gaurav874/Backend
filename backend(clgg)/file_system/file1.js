// const fs = require('fs');
// const data = fs.readFileSync("./data.txt", "utf-8");
// console.log(data.toString());

const fs = require('fs');
const data = fs.readFileSync("./data.txt","utf-8");
console.log(data)
if(data.match("H")){
    console.log("H is found");
    const newdata = data.replace("H","ABESA");
    fs.writeFileSync("./data.txt",newdata,"utf-8");
    
}