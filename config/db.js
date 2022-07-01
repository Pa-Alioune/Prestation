const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('prestasen', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
      timestamps: false,
    }
  });
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.utilisateur = require('../models/Utilisateur')(sequelize, DataTypes);
db.categorie = require('../models/categorie')(sequelize, DataTypes);
db.commentaire = require('../models/commentaire')(sequelize, DataTypes);
db.domaine = require('../models/domaine')(sequelize, DataTypes);
db.images = require('../models/images')(sequelize, DataTypes);
db.infos = require('../models/infos')(sequelize, DataTypes);
db.prestataire = require('../models/prestataire')(sequelize, DataTypes);
db.vote = require('../models/vote')(sequelize, DataTypes);
db.prestation = require('../models/prestation')(sequelize, DataTypes);

// db.utilisateur.hasOne(db.categories)

db.domaine.hasMany(db.categorie);
db.categorie.belongsTo(db.domaine)

db.utilisateur.hasMany(db.commentaire);
db.commentaire.belongsTo(db.utilisateur);

db.prestation.hasMany(db.commentaire);
db.commentaire.belongsTo(db.prestation);

db.prestation.hasMany(db.vote);
db.vote.belongsTo(db.prestation);

db.prestation.hasMany(db.images);
db.vote.belongsTo(db.prestation);

db.prestataire.hasMany(db.prestation);
db.prestation.belongsTo(db.prestataire);

db.categorie.hasMany(db.prestation);
db.vote.belongsTo(db.categorie);

db.utilisateur.belongsToMany(db.prestataire, { through: db.infos, /* options */ });




module.exports = db;