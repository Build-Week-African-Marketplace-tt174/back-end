const db = require('../../data/dbConfig');

module.exports = {
    getUsers,
    getUserById,
}

// gets all users
async function getUsers() {
    return await db('users').select('id', 'company', 'email', 'username')
}

// gets user by id
async function getUserById(id) {
    return await db('users').select('id', 'company', 'email', 'username').where({ id }).first();
}