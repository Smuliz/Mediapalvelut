const {Pool} = require('pg');

const pool = new Pool({
    user: 'samuli',
    host: 'localhost',
    database: 'mediapalvelut',
    password: 'minimium',
    port: 5432
})

module.exports = pool