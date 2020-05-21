//import db connection pool
const db = require('../database/database.config');

//user model class
class UserModel
{
    //crud operations
    async getUsers()
    {
        const res = await db.query('SELECT * FROM users ORDER BY id ASC');
        return res;
    }

    async getUserByid(id)
    {
        const res= await db.query('SELECT * FROM users WHERE id=$1',[id]);
        return res;
    }

    async createUser(name,lastname,username)
    {
        const res = await db.query(
            'INSERT INTO users (first_name,last_name,username) VALUES($1,$2,$3)',
            [name,lastname,username]
            );
        return res;
    }

    async updateUser(name,lastname,username,id)
    {
        const res = await db.query(
            'UPDATE users SET first_name = $1, last_name=$2, username=$3 WHERE id = $4 ',
            [name,lastname,username,id]);
        return res;
    }

    async deleteUser(id)
    {
        const res = await db.query(
            'DELETE FROM users WHERE id =$1',
            [id]
        );
        return res;
    }
}

//export class instance
const model = new UserModel();
module.exports = model;