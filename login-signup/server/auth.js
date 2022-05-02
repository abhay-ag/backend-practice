const {data} = require('./users/package.json')
const path = require('path')

const auth = (req, res, next) => {
    const {uName, pass} = req.body;
    let flag = 0

    for(let i = 0; i< data.length; i++){
        if(data[i].uName === uName && data[i].pass === pass){
            flag = 1;
        }else if(data[i].uName === uName && data[i].pass !== pass){
            flag = 2;
        }
    }

    if(flag === 1){
        return res.status(200).send(`Hello, ${uName}`)

        // sending a file in node.js
        // return res.sendFile(path.resolve(__dirname,'../public/auth.html'))
    }else if(flag === 2){
        return res.status(401).send(`${uName}, you have entered wrong password!! Please try again`)
    }

    res.status(404).send(`User: ${uName} not found! Please try again.`)
}

module.exports = auth;