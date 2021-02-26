exports.seed = function(knex) {
  return knex('users').insert([
    {company: 'The Electric Company', password: 'password', username: 'testuser1', email: 'testuser@email.com'},
  ]);
};