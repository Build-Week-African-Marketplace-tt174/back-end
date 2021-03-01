
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
    .createTable('user_items', tbl => {
      tbl.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.integer('item_id').unsigned().notNullable().references('items_id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.primary(['user_id', 'item_id']);
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('user_items').dropTableIfExists('items').dropTableIfExists('users');
};
