const express = require('express')
const route   = express.Router()

const service = require('../service/index')
const data    = require('../../db/data')

route.route('/').get((req, res)=>{
   service.get(res)
})
route.route('/add-msg').post((req, res)=>{
    service.post(res, data.bodyRequest(req))
 })

module.exports = route