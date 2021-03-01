const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    add,
    update
}

// gets all items
async function get(id) {
    return await db('items').select('id', 'name', 'description', 'price', 'location', 'photo_url').where({ user_id: id });
}

// gets item by id
async function getById(user, id) {
    return await db('items').where({ user_id: user, id: id });
}

// updates item
async function update(user, id, changes) {
    const count = await('items').where({ user_id: user, id: id }).update(changes);
    return await getById(user, id);
}

async function add(item) {
    return await db('items');
}