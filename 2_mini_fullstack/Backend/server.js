// const express = require('express')

import express from 'express' // it is module js 
// const express = require('express') // it is basic js 

const app = express()


app.use(express.static('dist'))

// app.get('/', (req,res)=> {
//     res.send('server is ready')
// })





//get a list of 5 jokes 
app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            id: 1,
            joke: 'Why was the coffee file a police report?'
        },
        {
            id: 2,
            joke: 'Why did the chicken cross the road?'
        },
        {
            id: 3,
            joke: 'Why did the tomato turn red?'
        },
        {
            id: 4,
            joke: 'Why did the cow cross the road?'
        }
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000;

// app.listen(port , (req,res) => {
//     res.send("server is runnig ")
// } )

app.listen(port, () => {
    console.log("i am ready to server ")
})
