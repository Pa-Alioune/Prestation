
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {

    const Utilisateur = sequelize.define('Utilisateur', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
          type: DataTypes.STRING,
          allowNull:false,
          validate: {
            len: [2, 50]
          }
          // allowNull defaults to true
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
              len: [2, 100]
            }            
            // allowNull defaults to true
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate: {
              isEmail: true
            }

            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
              len: [8,50]
            }
            // allowNull defaults to true
        },
        role: {
        type: DataTypes.STRING,
        defaultValue: 'user'
        // allowNull defaults to true
        }  
      }, 
      // {
      //   hooks: {
      //     beforeCreate: (Utilisateur, options) => {
      //       Utilisateur.password = bcrypt.hashSync(Utilisateur.password)
      //     }
      //   }
      //   // Other model options go here
      // }
      );

      return Utilisateur;
}

