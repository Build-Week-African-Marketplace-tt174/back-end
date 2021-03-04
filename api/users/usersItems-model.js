const db = require('../data/dbConfig');


module.exports = {
    get,
    getById,
    update,
    add,
    remove
}

// gets all items from user
async function get(user) {
    return await db('items as i').join('categories as c', 'i.category_id', 'c.id').select('i.id', 'i.name', 'i.description', 'i.price', 'i.market', 'c.type as category', 'i.photo_url').where({ 'i.user_id': user })
}

// gets item from user by id
async function getById(user, id) {
    return await db('items as i').join('categories as c', 'i.category_id', 'c.id').select('i.id', 'i.name', 'i.description', 'i.price', 'i.market', 'c.type as category', 'i.photo_url').where({ 'i.user_id': user, 'i.id': id }).first();
}

// updates item by id
async function update(user, id, changes) {
    const count = await db('items').where({ user_id: user, id: id }).update(changes);
    return getById(user, id);
}

// adds new item
async function add(item) {
    const [id] = await db('items').insert(item);
    return await db('items').where({ id });
}

// removes item by id
async function remove(user, id) {
    return await db('items').where({ user_id: user, id: id }).del();
}