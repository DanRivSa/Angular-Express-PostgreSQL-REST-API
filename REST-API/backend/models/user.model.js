const pool = require('../database/db.config');

class UserModel
{

    //crud operations

    async getUsers()
    {
        const res = await pool.query('SELECT * FROM users ORDER BY id');
        return res;
    }

    async getUserById(id)
    {
        const res = await pool.query('SELECT * FROM users WHERE id=$1',[id]);
        return res;
    }

    async postUser(name,lastname,username)
    {
        const res = await pool.query('INSERT INTO users (first_name,last_name,username) VALUES($1,$2,$3)',
        [name,lastname,username]);
        return res;
    }

    async putUser(id,name,lastname,username)
    {
        const res = await pool.query('UPDATE users SET first_name = $1, last_name = $2, username=$3 WHERE id=$4',
        [name,lastname,username,id]);
        return res;
    }

    async deleteUser(id)
    {
        const res = await pool.query('DELETE FROM users WHERE id=$1',[id]);
        return res;
    }

}

const model = new UserModel();
module.exports = model;