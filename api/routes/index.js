const express = require('express')
const route   = express.Router()

const service = require('../service/index')

route.route('/').get(async(req, res)=>{
    res.send(service.get())
})

module.exports = route