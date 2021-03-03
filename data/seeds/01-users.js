const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  const hash = bcrypt.hashSync('password', 10);

  return knex('users').insert([
    {
      company: 'The Electric Company',
      password: hash,
      username: 'testuser1',
      email: 'testuser@email.com',
    },
    {
      company: 'Dunder Mifflin',
      password: hash,
      username: 'michaelscarn',
      email: 'dundermifflinpaper@gmail.com',
    }
  ]);
};