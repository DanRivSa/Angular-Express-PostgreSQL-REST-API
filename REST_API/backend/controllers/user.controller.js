//import model instance
const model = require('../models/user.model');

//controller class
class UserController
{
    //crud operations
    getUsers = async (req,res)=>
    {
        const db_res = await model.getUsers();
        res.json(db_res.rows); 
    };

    getUserById = async (req,res)=>
    {
        const id = req.params.id;
        const db_res = await model.getUserByid(id);
        res.json(db_res.rows);
    };

    postUser = async (req,res)=>
    {
        console.log(req.body);
        const {first_name,last_name,username} = req.body;
        const db_res = await model.createUser(first_name,last_name,username);
        res.json(db_res.rows);
    };

    updateUser = async (req,res)=>
    {
        const {first_name,last_name,username} = req.body;
        const id = req.params.id; 
        const db_res = await model.updateUser(first_name,last_name,username,id);
        res.json(db_res.rows);
    };

    deleteUser = async (req,res)=>
    {
        const id = req.params.id;
        const db_res = await model.deleteUser(id);
        res.json(db_res.rows);
    };
}

//instantiate class
const controller = new UserController();

//ecport class instance
module.exports = controller;