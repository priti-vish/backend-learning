const express = require('express')   //package of express
const app = express() //defined an app
const port = 3000 //a port number

//app.get(path, handler) or app.post or app.delete or app.put
//this function takes a request & response object 
//get request
//post req - postman, html
app.get('/', (req, res) => {
  res.send('Hello World!') //send hello world
})
//Whenever we browse to that page then handler will be shown in the url /home, /contact,..
app.get('/home', (req, res) => {
  res.send('Welcome to my page') //send hello world
})

app.get('/home/:slug', (req, res) => {
  //http://127.0.0.1:3000/home/intro?mode=dark&lang=en
  console.log(req.params)
  console.log(req.query)
  console.log(req.params.slug)
  res.send(`This is my page of ${req.params.slug}`) //send hello world
})

app.get('/aboutus', (req, res) => {
  res.send('About us') //send hello world
})

app.get('/contact', (req, res) => {
  res.send('Contact details for inquiry') //send hello world
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
