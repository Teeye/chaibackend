require('dotenv').config()
const express =  require('express')
//import express from "express"
const app = express()

const port = 4000

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/login', (req, res) =>{
    res.send('<h1> please login at routine website</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send("<h2>Chai aur Code </h2>")
})
   
app.listen(process.env.PORT, () => {
    console.log('example app listening on port ${port}')
})