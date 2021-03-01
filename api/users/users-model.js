const db = require('../../data/dbConfig');

module.exports = {
    getItems,
    getById,
    add
}

// gets all items
async function getItems(id) {
    return await db('user_items');
}

// gets item by id
async function getById(itemID) {
    return await db('users');
}

async function add(item) {
    return await db('users');
}