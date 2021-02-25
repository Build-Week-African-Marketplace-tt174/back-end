exports.up = async function(knex) {
    return await knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.string('name').notNullable();
        tbl.string('description', 500);
        tbl.integer('price').notNullable();
        tbl.string('location');
        tbl.string('photo_url');
        tbl.integer('user_id').unsigned().references('users.id').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
};
