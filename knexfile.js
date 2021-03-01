// Update with your config settings.
const pgConnection = process.env.DATABASE_URL;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },
    connection: { filename: './data/test.db3' },
  },

  production: {
    client: "sqlite3",
    connection: {
      filename: './data/db.db3',
      connectionString: pgConnection,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }

};
