// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'cors_test',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'ec2-54-157-16-196.compute-1.amazonaws.com',
      database: 'd8vvlonmh42i5a',
      user:     'pfyjdpawabmrfq',
      password: '1445dcd1b5b88d941b7a3ca15a3598aea9d5c35960f37b29257c3784ab06548d',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};
