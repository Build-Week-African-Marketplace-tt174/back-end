
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {company: 'The Electric Company', password: 'password', username: 'testuser1', email: 'testuser@email.com'},
      ]);
    });
};
