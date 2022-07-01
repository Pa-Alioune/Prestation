const Login = require('../models/login')
const { Sequelize } = require('sequelize');

exports.showLogPage = (req, res) => {
    res.render("login");
}

exports.showIndex = (req, res) => {
    res.render("home");
}

exports.showHome = (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    Login.verify(login, password);
}