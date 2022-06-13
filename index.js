const _Port = 8081

const express = require('express')
const cors    = require('cors')
const app     = express()
const route   = require('./api/routes')

app.use(cors({ 
    origin:'*'
}))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.use('/', route)
app.listen(_Port)
