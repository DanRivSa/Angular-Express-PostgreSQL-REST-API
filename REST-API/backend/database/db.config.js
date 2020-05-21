const {Pool} = require('pg');
const config = 
{
    user: 'postgres',
    host: 'localhost',
    database: 'rest_api',
    password: '1234',
    port: 5432,
};

const pool = new Pool(config);
module.exports= pool;