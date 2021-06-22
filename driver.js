
const express = require('express')
const path = require('path');
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/home.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/about.html'));
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})