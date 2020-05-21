//require db connection pool
const {Pool} = require('pg');

//database configuration
const config = {
    user:'postgres',
    host:'localhost',
    password:'1234',
    database:'rest_api',
    port:5432
}

//create a connection pool with this configuration
const pool = new Pool(config);

//expose connection
module.exports = pool;