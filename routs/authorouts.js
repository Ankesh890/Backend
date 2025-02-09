const express = require("express");
const { register, login} = require ("../Library-management-api/controllers");
const router = express.router();

router.post("/register",register);

router.post("/login",login);

module.exports =router;