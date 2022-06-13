const knex = require('../../db/db')

function get(){
   const db = knex.select('*')
        .table('test')
        .then(response => response.json())
        .catch(err     => err.send())
    
    return db
}

function post(data){
    return data
}

function put(id, data){
    return data
}

function remove(id){
    return id
}

module.exports = { get, post, put, remove }