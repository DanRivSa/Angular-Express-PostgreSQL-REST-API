//import model here
const model = require('../models/user.model');

class UserController
{
    //crud attributes

    getUser = async (req,res)=>
    {
        const db_res= await model.getUsers(); //model res;
        res.json(db_res.rows);
    } 

    getUserById = async (req,res)=>
    {
        const id = req.params.id;
        const db_res= await model.getUserById(id); //model res;
        res.json(db_res.rows);
    } 

    postUser = async (req,res)=>
    {
        const {name,lastname,username} = req.body;
        const db_res= await model.postUser(name,lastname,username);//model res;
        res.json(db_res.rows);
    } 

    putUser = async (req,res)=>
    {
        const id = req.params.id;
        const {name,lastname,username} = req.body;
        const db_res= await model.putUser(id,name,lastname,username);//model res;
        res.json(db_res.rows);
    } 

    deleteUser = async (req,res)=>
    {
        const id = req.params.id;
        const db_res= await model.deleteUser(id);//model res;
        res.json(db_res.rows);
    } 
}

const controller = new UserController();
module.exports = controller;