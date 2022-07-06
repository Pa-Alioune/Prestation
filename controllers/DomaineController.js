const db = require('../config/db');
module.exports.showAll = (request,response)=>{
    domaine = db.domaine.findAll()
    domaine.then(success=>{
        domaines = success
        response.render("admin/domaine/viewAll",{domaines})
    })
    
}