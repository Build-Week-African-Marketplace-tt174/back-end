const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById,
    getUserById,
    update,
    add,
}

// gets all items
async function get(user) {
    return await db('items').select('id', 'name', 'description', 'price', 'market', 'photo_url').where({ user_id: user });
}

// gets item by id
async function getById(user, id) {
    return await db('items').where({ user_id: user, id: id }).select('id', 'name', 'description', 'price', 'market', 'photo_url').first();
}

// gets user by id
async function getUserById(id) {
    return await db('users').where({ id }).first();
}

// updates item
async function update(user, id, changes) {
    const count = await db('items').where({ user_id: user, id: id }).update(changes);
    return getById(user, id);
}

// adds new item
async function add(item) {
    const [id] = await db('items').insert(item);
    return await db('items').where({ id });
}

// removes item
async function remove(user, id) {
    return await db('items').where({ user_id: user, id: id });
}