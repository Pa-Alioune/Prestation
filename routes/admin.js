var express = require('express');
var router = express.Router();
router.use(require("../Middlewares/auth"))
router.use(require("../Middlewares/admin"))
const dashboard = require('../controllers/admin/adminDashboard')
const domaine = require('../controllers/admin/DomaineController')
const categorie = require('../controllers/admin/CategorieController');
router.get("/",dashboard.home)
router.get("/domaine/ajouter",domaine.create)
<<<<<<< HEAD
router.post("/domaine/ajouter",domaine.store)
router.get("/domaine/modifier/:idCategorie",domaine.update)
router.post("/domaine/modifier/:idCategorie",domaine.storeUpdate)
router.post("/domaine/delete/:id",domaine.delete)



router.get("/categorie/ajouter",categorie.create)
router.post("/categorie/ajouter",categorie.store)
router.get("/categorie/modifier/:idCategorie",categorie.update)
router.post("/categorie/modifier/:idCategorie",categorie.storeUpdate)
router.post("/categorie/delete/:idCategorie",categorie.delete)
module.exports = router;
=======
module.exports = router;

>>>>>>> 7fcf634e4e064d66fcbb3f963cec331c78d44148
