const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add
}

// gets all items
async function get() {
    return await db('items');
}

// gets item by id
async function getById(itemID) {
    return await db('items').where({ id: itemID }).first();
}

async function add(item) {
    const [id] =  await db('items').insert(item);
    return getById(id);
}