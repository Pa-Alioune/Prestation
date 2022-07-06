const { request, response } = require('express');
const { Sequelize, DataTypes, Model, Op } = require('sequelize');
const { domaine } = require('../../config/db');
const db = require('../../config/db');

module.exports.create= (request,response)=>{
    
    response.render('admin/domaine/create')
}
module.exports.store= (request,response)=>{
    request.session.user
    db.domaine.create({
        nom:request.body.name,
        description:request.body.description,
    })
    response.redirect("/domaine/all")   
}
module.exports.update= (request,response)=>{
   
    dBdomaine = db.domaine.findOne({
        where: {id:request.params.id}
    })
    dBdomaine.then((result) => {
        if (result == null) {
            response.send("Erreur 404")
        }
        else
        {
            domain = result.dataValues
            response.render('admin/domaine/update',{domain})
        }
    }).catch((err) => {
        throw err
    });
}
module.exports.storeUpdate= (request,response)=>{
    let dom =  db.domaine.findOne({where:{id:request.params.id}})
    dom.then(success=>{
        if (success) {
            console.log(request.body.name);
          success.update({
            nom:request.body.name,
            description:request.body.description,
          }).then(res=>{
              response.redirect("/domaine/all")   
          })
        }
      })
}

module.exports.delete= (request,response)=>{
    
    let cat =  db.domaine.destroy({where:{id:request.params.id}})
    cat.then(success=>{
        if (success) {
              response.redirect("/domaine/all")   
          }
        })
        
}
