const knex = require('../../db/db')

async function get(res){
   const db = await knex.select('*')
        .table('test')
        .then(response => res.status(200).json(response))
        .catch(err     => res.status(404).send(err))
    
    return db
}

async function post(res,data){
    const db = await knex.insert(data)
         .table('test')
         .then(response => res.status(200).json(response))
         .catch(err     => res.status(400).send(err))

    return db
}

function put(id, data){
    return data
}

function remove(id){
    return id
}

module.exports = { get, post, put, remove }