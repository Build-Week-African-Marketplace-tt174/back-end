const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById
}

async function getAll() {
    return await db('categories');
}

async function getById(id) {
    return await db('categories').where({ id }).first()
}