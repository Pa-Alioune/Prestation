
module.exports = (sequelize, DataTypes) => {

    const Prestation = sequelize.define('Prestation', {
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
        description: {
            type: DataTypes.TEXT,
            allowNull:false           
            // allowNull defaults to true
        }
         
      }, {

        // Other model options go here
      });

      return Prestation;
}

