const express = require('express')
const path = require('path')
const app = express();
const {data} = require('./users/package.json')

app.use(express.static('./login-signup/public'))

app.post('/login', (req, res) => {
    
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})