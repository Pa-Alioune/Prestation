
module.exports = (sequelize, DataTypes) => {

    const Commentaire = sequelize.define('Commentaire', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        contenu: {
          type: DataTypes.TEXT,
          allowNull:false
          // allowNull defaults to true
        },
        date: {
            type: DataTypes.DATE,
            allowNull:false         
            // allowNull defaults to true
        }
      }, {

        // Other model options go here
      });

      return Commentaire;
}

