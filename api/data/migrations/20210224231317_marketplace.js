
exports.up = async function(knex) {
  return await knex.schema
    .createTable('users', tbl=>{
      tbl.increments();
      tbl.string('company', 128).unique();
      tbl.string('email', 128);
      tbl.string('username', 128).unique().notNullable();
      tbl.string('password', 128).notNullable();
    })
    .createTable('categories', tbl => {
      tbl.increments();
      tbl.string('type', 64).notNullable().unique();
    })
    .createTable('items', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description', 512);
      tbl.decimal('price').notNullable();
      tbl.string('market', 128).notNullable();
      tbl.integer('category_id').unsigned().notNullable().references('categories.id').onDelete('CASCADE').onUpdate('CASCADE');
      tbl.string('photo_url');
      tbl.integer('user_id').unsigned().notNullable().references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = async function(knex) {
    return await knex.schema.dropTableIfExists('items').dropTableIfExists('categories').dropTableIfExists('users');
};
