const http = require('http');
const axios = require('axios');
const server = http.createServer(async (req,res) => {
    console.log('Hello from the server!');
    res.writeHead(200,{"content-type": "text/html"});
    // const response = await fetch("https://dummyjson.com/products");
    // const data  = await response.json();

    const response = await axios.get("https://dummyjson.com/products");
    const productsdata  = response.data.products;

    let frontdata = `<html><head></head></html>`
    productsdata.forEach((product) => {
       frontdata+= `<div><img src = "${product.thumbnail}"/>
       </div>`
    });
    frontdata += `<body></html>`
    res.end(frontdata);
});


const port = 3000;
server.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})

//server ban gya done create http server upr