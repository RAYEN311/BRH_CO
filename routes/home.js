const express = require('express')
const homeroutes = express.Router()

// front end code start



homeroutes.get('/' , (req , res)=>{
    res.render('index')
})

// front end code stop


module.exports = homeroutes