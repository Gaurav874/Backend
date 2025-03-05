// const express = require('express')
import express from 'express'; //1 import
const app = express() //2 createserver in new version

const port = 3000;
app.get('/',(req,res) => { //4th 
    res.end("Welcome to express");
})


// app.get('/api',(req,res) => { //4th 
//     try{
//     const {name,rollno} = req.query;
//     if(!name){
//         return res.status(400).send("Name is required");
//     }
//     else{
//         res.end(`welcome to abes : ${name} and roll number is ${rollno}`)
//     } 
//     }catch(error){
//         console.log(`Error: ${error.message}`)
        

//     }
    
// })

//get
app.get('/api/:name/:rollno',(req,res) => {
    try{
        const { name, rollno} = req.params;
        res.send(`welcome ${name} and your roll no. is ${rollno}`);
    }catch(error){
        console.log(`error is : ${error.message}`)
    }
});





// post
app.use(express.json());
app.post('/users',(req,res) => {
    const {name} = req.body;
    res.send(`my name is ${name}`)
});










app.listen(port,() =>{    //3 for port
    console.log(`server is running on port ${port}`);
});
