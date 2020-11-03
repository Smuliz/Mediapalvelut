const {Pool} = require('pg');

const pool = new Pool({
    user: 'samuli',
    host: 'localhost',
    database: 'mediapalvelu',
    password: '',
    port: 5432
})

module.exports = pool