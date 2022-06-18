const knex = require('../../db/db')

async function get(res){
   const db = await knex.select('*')
            .table('test')
            .then(response => res.status(200).json(response))
            .catch(err     => res.status(404).send(err))
    
    return db
}

async function getById(id,res){
    const db = await knex.where(id)
            .select()
            .table('test')
            .then(response => res.status(200).json(response))
            .catch(err     => res.status(404).send(err))

    return db
}

async function post(res,data){
    const db = await knex.insert(data)
            .table('test')
            .then(response => res.status(201).json(response))
            .catch(err     => res.status(400).send(err))

    return db
}

async function put(id,res,data){
    const db = await knex.where(id)
            .update(data)
            .table('test')
            .then(response => res.status(201).json(response))
            .catch(err     => res.status(404).send(err))

    return db
}

async function remove(id,res){
    const db = await knex.where(id)
            .delete()
            .table('test')
            .then(_ => res.status(204).json())
            .catch(err     => res.status(404).send(err))

    return db
}

module.exports = { get, getById, post, put, remove }