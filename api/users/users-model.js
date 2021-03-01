const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add
}

// gets all items
async function get(id) {
    return await db('user_items').where({ user_id: id });
}

// gets item by id
async function getById(itemID) {
    return await db('users');
}

async function add(item) {
    return await db('users');
}