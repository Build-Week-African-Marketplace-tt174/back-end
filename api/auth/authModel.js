const db = require('../../data/dbConfig');

module.exports = {
    insert,
    getBy
}

//gets existing user
async function getBy(filter){
    return await db('users').where(filter).orderBy('id');
}

//inserts new user into db
async function insert(newUser){
    return await db.insert(newUser).into('users');
}
