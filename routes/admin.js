var express = require('express');
var router = express.Router();
router.use(require("../Middlewares/auth"))
router.use(require("../Middlewares/admin"))
const dashboard = require('../controllers/admin/adminDashboard')
const domaine = require('../controllers/admin/Domaine')
router.get("/",dashboard.home)
router.get("/domaine/ajouter",domaine.create)
module.exports = router;