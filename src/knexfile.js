require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user:  'root' , //process.env.DB_USER,
      password: 'kmk99328400', //process.env.DB_PASSWORD,
      database: 'tarefasdb', //process.env.DB_NAME,
      port: process.env.DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
