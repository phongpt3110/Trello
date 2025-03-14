import express from 'express';
// const express = require('express')
const app = express()

const hostname = 'localhost'
const port = "8017"

app.get('/', function (req, res) {
  res.send('<h1>Welcome to Trello API</h1>')
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});