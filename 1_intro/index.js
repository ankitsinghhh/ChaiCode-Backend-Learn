// console.log("hello world this is node")

const express = require('express'); //importing express
const app = express();
// const port = 3000; // there's no gurantee if this port will be available , free on any other machine . so we use dotenv
// importing dotenv
require('dotenv').config()
const port = process.env.PORT


app.get('/',(req,res) => {
    //doing a get request
    res.send(`Hello World! This Nodejs server and listening on ${port}`);
})

app.get('/twitter',(req,res) => {
    res.send("twitter wale endpoint pe aagae hai ")
})


app.get('/login',(req,res) => {
    res.send("<h1> welcome to login page </h1>")
})

app.get('/ankit',(req,res)=> {
    res.send("ankit endpoint pe aagae hai")
})

app.get("/youtube",(req,res)=>{
    res.send('youtbe endpoint hai ye')
})

//listening on port 3000
app.listen(port , () => {
    console.log(`server set and listening on port ${port}`)
})