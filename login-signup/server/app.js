const express = require('express')
const path = require('path')
const app = express();
const auth = require('./auth')

// run the server from the home directory i.e backend-practice.
app.use(express.static('./login-signup/public'))
app.use(express.urlencoded({extended: false}))

// using middleware
app.post('/login',auth, (req, res) => {})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})