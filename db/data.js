function bodyRequest(req){
    data = { msg : req.body.msg }

    return data
}

function idRequest(req){
    data = { id : req.params.id }

    return data
}

module.exports = { bodyRequest, idRequest}