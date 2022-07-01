
module.exports = (sequelize, DataTypes) => {

    const Vote = sequelize.define('Vote', {
        // Model attributes are defined here
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        valeur: {
          type: DataTypes.INTEGER,
          allowNull:false,
          validate: {
            isInt: true,
            max: 5,
            min: 1
          }
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

      return Vote;
}

