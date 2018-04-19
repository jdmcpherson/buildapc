const kx = require('knex')({
   client: 'pg',
   connection: {
      database: 'buildapc_dev'
   }
})

module.exports = kx