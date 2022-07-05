
const express = require('express');
// const layouts = require('express-ejs-layouts');
const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./config/db');
const bodyParser = require('body-parser');
const session = require('express-session');
const Login = require('./controllers/LoginController');
const dashboard = require('./controllers/DashboardController')
// const User = require('./models/Utilisateur')


const homeController = require('./controllers/homeController');
const errorController = require('./controllers/errorController');
const inscriptionController = require('./controllers/inscriptionController');

const app = express();


app.set('port', process.env.PORT || 3000);

// Moteur de template
app.set('view engine', 'ejs');
//Cration ou modification des tables de la base de données
db.sequelize.sync({alter: true});

// Middleware
// app.use(layouts);
app.use(session({
    secret:"azaezeazea",
    resave:false,
    saveUninitialized:true,
    cookie :  {secure:false}
}))
app.use(express.static('public'));
app.use(require("./Middlewares/flash.js"))


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
auth=require('./Middlewares/auth')
invite=require('./Middlewares/invite')
//Router
// db.utilisateur.create({nom:"laye",prenom:"ndiaye",password:"passer1234",email:"laye@esp.sn",role:"user"})
app.get('/login', invite,Login.index )
app.get('/dashboard',auth,dashboard.home) 
app.post('/login', invite,Login.store ) 
app.post('/home', homeController.showHome)
app.get('/', homeController.showIndex)

app.get('/inscription', inscriptionController.showInscriptionPage);
app.post('/inscription', inscriptionController.createUser);

var admin = require('./routes/admin');
 app.use("/admin",admin)
app.listen(app.get('port'),()=> console.log(`Le serveur est entrain d'écouter sur http://localhost:${app.get('port')}`))

