const express = require('express')
const app = express()

// test
app.get('/', (req, res) => res.send('hello world'))

app.listen(2333, () => console.log('test listening on port 2333'))