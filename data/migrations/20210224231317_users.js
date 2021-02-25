
exports.up = async function(knex) {
  return await knex.schema.createTable('users', tbl=>{
    tbl.increments();
    tbl.text('company')
    .unique();
    tbl.text('email');
    tbl.text('username')
    .unique()
    tbl.text('password');

  })
};

exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('users')
};
