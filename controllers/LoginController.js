const { request, response } = require('express');
const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const db = require('../config/db');

module.exports.index = (request,response)=>{
    
    response.render("login")
}
module.exports.store = (request,response)=>{
   user = db.utilisateur.findOne({
    where: {
        [Op.and]: [
          { email:request.body.login },
          { password: request.body.password }
        ]
      }
   });
   user.then(success=>{
        if (success) {
            this.connect(request,response,success)
        }
        else
        {
            request.flash("error","Login ou mot de passe incorrect")
            response.redirect("/login")   
        }
   })

}
module.exports.connect = (request,response,user)=>{
    request.session.user = user.dataValues
    response.redirect('/dashboard')
}