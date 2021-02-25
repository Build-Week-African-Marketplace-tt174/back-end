const db = require('../data/dbConfig');

module.exports = {
    insert,

}

//gets existing user
async function get(filter){
    return await db.select('*').from('users').where(filter);
}

//inserts new user into db
async function insert(newUser){
    return await db.insert(newUser).into('users');
}
