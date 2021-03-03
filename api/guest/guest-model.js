const db = require('../../data/dbConfig');

module.exports = {
    get,
    getById
}

// gets all items
async function get() {
    return await db('items as i')
    .join('users as u', 'i.user_id', 'u.id')
    .join('categories as c', 'i.category_id', 'c.id')
    .select('i.id', 'i.name', 'i.description', 'i.price', 'i.market', 'c.type as category', 'i.photo_url', 'u.company');
}

// gets item by id
async function getById(itemID) {
    return await db('items as i')
    .join('users as u', 'i.user_id', 'u.id')
    .join('categories as c', 'i.category_id', 'c.id')
    .select('i.id', 'i.name', 'i.description', 'i.price', 'i.market', 'c.type as category', 'i.photo_url', 'u.company')
    .where({ 'i.id': itemID }).first();
}