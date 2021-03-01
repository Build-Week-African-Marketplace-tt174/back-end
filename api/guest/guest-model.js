const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById
}

// gets all items
async function get() {
    return await db('items');
}

// gets item by id
async function getById(itemID) {
    return await db('items').where({ id: itemID }).first();
}