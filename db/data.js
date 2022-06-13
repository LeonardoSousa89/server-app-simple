function bodyRequest(req){
    data = { msg : req.body.msg }

    return data
}

module.exports = { bodyRequest }