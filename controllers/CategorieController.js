const db = require('../config/db');
module.exports.showAll = (request,response)=>{
    categorie = db.categorie.findAll()
    categorie.then(success=>{
        categories = success
        response.render("admin/categorie/viewAll",{categories})
    })

}