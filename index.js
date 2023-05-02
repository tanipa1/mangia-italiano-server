const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Mangia Italiano is Running')
})

app.listen(port, () => {
  console.log(`Mangia Italiano running on port ${port}`)
})