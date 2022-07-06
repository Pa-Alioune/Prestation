const db = require('../../config/db');
module.exports.create= (request,response)=>{
    user=request.session.user
    domaine = db.domaine.findAll()
    domaine.then(success=>{
        domaines = success
        response.render('admin/categorie/create',{domaines})
    })
}
module.exports.store= (request,response)=>{
    request.session.user
    db.categorie.create({
        nom:request.body.name,
        description:request.body.description,
        DomaineId:request.body.idDomaine
    })
    response.redirect("/categorie/all")
    
}

module.exports.update= (request,response)=>{
   
    dBdomaines = db.domaine.findAll()
    dBdomaines.then((result) => {
        if (result === null) {
            response.send("Erreur 404")
        }
        else
        {
            let cat =  db.categorie.findOne({where:{id:request.params.idCategorie}})
            cat.then(success=>{
                if (success) {
                    response.render('admin/categorie/update',{domaines:result,categorie:success.dataValues})
                }
            })

        }
    }).catch((err) => {
        throw err
    });
}

module.exports.storeUpdate= (request,response)=>{
    let cat =  db.categorie.findOne({where:{id:request.params.idCategorie}})
    cat.then(success=>{
        if (success) {
          success.update({
            nom:request.body.name,
            description:request.body.description,
            DomaineId:request.body.idDomaine,
          }).then(res=>{
              response.redirect("/categorie/all")   
          })
        }
        
      })
}

module.exports.delete= (request,response)=>{
    
    let cat =  db.categorie.destroy({where:{id:request.params.idCategorie}})
    cat.then(success=>{
        if (success) {
              response.redirect("/categorie/all")   
          }
        })
        
}