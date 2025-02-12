const fs = require('fs/promises');

const write = async () => {
    
    try{
         await fs.writeFile("./data2.txt", "this is my new file okk", "utf8");
    } catch (error){
        console.log(error.message);
    }

}
write();