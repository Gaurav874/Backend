const http = require('http');  //1
const axios = require('axios');
const server = http.createServer(async (req,res) => {  //2
   res.writeHead(200,{"content-type": "text/html"}); //3
   
   const response = await axios.get("https://api.github.com/search/users",{
    params:{
        q:"location:ghaziabad"
    }
   });

   const data = response.data.items;
   let frontend = `<html><head></head></html>`
   data.forEach((product) => {
       frontend+= `<div><img src = "${product.avatar_url}"/></div>`
   });
   frontend += `<body></html>`
   res.end(frontend);
});

const port = 3001; //5
server.listen(port, () => { //6
    console.log(`server is listening on ${port}`); //7 and done hlo world
})
