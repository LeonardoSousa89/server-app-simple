const _Port = 8081

const express = require('express')
const cors    = require('cors')
const app     = express()

app.use(cors({ 
    origin:'*'
}))
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
app.listen(_Port)
