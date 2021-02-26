
exports.up = async function(knex) {
  return await knex.schema
    .createTable('users', tbl=>{
      tbl.increments();
      tbl.text('company')
      .unique();
      tbl.text('email');
      tbl.text('username')
      .unique()
      tbl.text('password');

    })
    .createTable('items', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description', 500);
      tbl.integer('price').notNullable();
      tbl.string('location');
      tbl.string('photo_url');
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('users').dropTableIfExists('items');
};
