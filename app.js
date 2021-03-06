
const express = require('express')
const path = require('path');
const app = express()
app.use(express.static(__dirname+'/static/'));
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})