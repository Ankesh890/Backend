const user = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.register = async (req ,res ) => {
    try{
        const {username,password,name,email} = req.body;
        const user = new User ({username,password,name,email});
        await user.save();
        res.status(201).json({message:"user registerd successfully"});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
};

 