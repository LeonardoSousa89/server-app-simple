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
route.route('/upt-msg/:id').put((req, res)=>{
    service.put(data.idRequest(req),res,data.bodyRequest(req))
})
route.route('/rmv-msg/:id').delete((req, res)=>{
    service.remove(data.idRequest(req),res)
})


module.exports = route