

module.exports = (sequelize, DataTypes) => {

    const Prestataire = sequelize.define('Prestataire', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        num_telephone: {
          type: DataTypes.STRING,
          allowNull:false,
          validate: {
            is: '/^(77|78|75|70|76)[0-9]{7}$/mg'
          }
          // allowNull defaults to true
        },
        date_naiss: {
            type: DataTypes.DATEONLY,
            allowNull:false          
            // allowNull defaults to true
        },
        lieu_naiss: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [2, 50]
              }


            // allowNull defaults to true
        }

      }, {

        // Other model options go here
      });

      return Prestataire;
}

