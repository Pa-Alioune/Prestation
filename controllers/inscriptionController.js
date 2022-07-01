const db = require('../config/db');

exports.showInscriptionPage = (req, res) => {
    res.render("inscription");
}

exports.createUser = (req, res) => {
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;



    if (password !== confirmPassword || (password === "" && confirmPassword === "")) {
        const notConform = "Vos mots de passe ne sont pas conformes"
        res.render("inscription", {notConform: notConform, nom:nom, prenom:prenom, email:email});
    }
    else {
        db.utilisateur.create({
        nom:nom,
        prenom:prenom,
        password:password,
        email:email,
        role:"user"});

        res.render("login");
    }

    
}