// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/api-server'
  },

  test: {
    client: 'postgresql',
    connection: 'postgres://localhost/api-server-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
